---
layout: project
title: My Favorite Hooks - useDataSync
thumbnail: images/usedatasync.png
stack:
  - React
  - TypeScript
  - Vite
slug: use-data-sync
source: https://github.com/willkrakow/my-hooks/blob/master/src/hooks/useDataSync.ts
description: A custom hook for effortless CRUD operations. Written in TypeScript.
publicId: usedatasync_fnxndt
date: 2022-09-07
---

Since React is **data-agnostic**, one of the most common problems developers face is how to keep their UI state in sync with an external API.
Countless libraries provide solutions to this issue, most notably (in 2022) React Query from Tanner Lindley and SWR from the Vercel Team.

Both React Query and SWR rely on **data invalidation**, which is somewhat of an event-based paradigm. Briefly, it works like this:

1. A data set `todos` is **fetched** (possibly asynchronously, e.g., from the server) and rendered
2. The UI is populated with `todos` data
2. `todos` is subjected to a **mutation** in the UI (a `todo` is created, updated, or deleted)
3. The mutation **fires an action** (e.g., an API call) and **invalidates** `todos`
5. Invalidation triggers a **refetch** of `todos`
6. New data populates the UI

Importantly, the invalidation > refetching happens *automagically* when using these libraries, so you don't have to refetch manually every data is mutated in the UI.
In addition to their core feature, data syncing libraries include sleek and performance-improving tools such as
- Optimistic updates (mutated data enters the UI state before the server responds)
- Prefetching (sending a request before data is needed and caching the response in local storage)
- Parallel fetching (aggregating fetching / mutations, à la `Promise.all`)

### useDataSync MVP
After working with React Query for almost a year, I felt I had a good grasp on its basic implementation and wanted to attempt reverse engineering its core feature set.

I managed to get an MVP working with a single custom hook. It's fairly opinionated and I'm not super happy with the type system at the moment, but it works and offers some customizability and performance perks. Check it out below:

```typescript
import { useState, useEffect, useCallback, useRef, useContext, useId } from "react";

type AsyncFn<T, K> = (data: T) => Promise<K>;

interface IDataSync<Data extends { id: string }, NewData, UpdateParams, DeleteParams, QueryData> {
    getter: AsyncFn<QueryData | undefined, Data[]>
    creator: AsyncFn<NewData, unknown>
    updater?: AsyncFn<UpdateParams, unknown>
    deleter?: AsyncFn<DeleteParams, unknown>,
    getterParams?: QueryData;
    fetchOnLoad?: boolean;
    optimistic?: boolean;
}
const useDataSync = <Data extends { id: string }, NewData extends {}, UpdateParams extends { id: string }, DeleteParams extends { id: string }, QueryData = {}>({
    getter,
    creator,
    updater,
    deleter,
    getterParams,
    fetchOnLoad = false,
    optimistic = false,
}: IDataSync<Data, NewData, UpdateParams, DeleteParams, QueryData>) => {
    const [data, setData] = useState<Data[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<any>();
    const [invalidated, setInvalidated] = useState(false);
    const [stagingData, setStagingData] = useState<NewData | null>();
    const [updateStagingData, setUpdateStagingData] = useState<UpdateParams | null>();
    const [deleteStagingData, setDeleteStagingData] = useState<DeleteParams | null>();

    const newItemId = useId();
    const createTempDatum = <T>(item: T) => ({
        ...item,
        id: newItemId,
    });
    const _sendData = useCallback(async () => {
        setLoading(true);
        if (!stagingData) {
            setLoading(false);
            return;
        };
        try {
            await creator(stagingData);
            setError(null);
        } catch (err) {
            setError(err)
        } finally {
            setLoading(false);
            setStagingData(null);
            setInvalidated(true);
        }
    }, [stagingData])

    const sendData = useCallback((data: NewData) => {
        setStagingData(data);
        setData(prev => optimistic ? ([...prev, createTempDatum(data)] as Data[]) : prev);
    }, [optimistic]);

    const fetchData = useCallback(async () => {
        setLoading(true);
        try {
            const result = await getter(getterParams);
            setData(result);
            setError(null);
        } catch (err) {
            setError(err)
        } finally {
            setLoading(false);
            setInvalidated(false);
        }
    }, [getterParams]);

    const _updateData = useCallback(async (data: UpdateParams) => {
        setLoading(true);
        if (!updater) {
            setLoading(false)
            return;
        };
        try {
            await updater(data);
            setError(null)
        } catch (err) {
            setError(err)
        } finally {
            setInvalidated(true);
            setLoading(false);
            setUpdateStagingData(null);
        }
    }, [updater])

    const updateData = useCallback(async (data: UpdateParams) => {
        setUpdateStagingData(data);
        setData(prev => optimistic ? prev.map((item => {
            if (item.id === data.id) {
                return {
                    ...item,
                    ...data,
                }
            }
            return item
        })) : prev);
    }, [])

    const _deleteData = useCallback(async (data: DeleteParams) => {
        setLoading(true);
        if (!deleter) {
            setLoading(false)
            return;
        };
        try {
            await deleter(data);
            setError(null)
        } catch (err) {
            setError(err)
        } finally {
            setInvalidated(true);
            setLoading(false);
            setDeleteStagingData(null);
        }

    }, [deleter])

    const deleteData = useCallback((data: DeleteParams) => {
        setData(prev => optimistic ? prev?.filter(item => item.id !== data?.id) : prev);
        setDeleteStagingData(data);
    }, [optimistic]);

    useEffect(() => {
        const refetchData = async () => {
            setLoading(true);
            try {
                const result = await getter(getterParams);
                setData(result);
                setError(null);
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false);
                setInvalidated(false);
            }
        }
        if (invalidated && !loading) {
            refetchData();
        }

        return () => {
            setInvalidated(false)
        }
    }, [invalidated, fetchOnLoad])

    useEffect(() => {
        if (fetchOnLoad) {
            fetchData();
        }
    }, [fetchOnLoad, fetchData]);

    useEffect(() => {
        const handleStagingData = async () => {
            await _sendData();
        }

        if (stagingData) {
            handleStagingData();
        }
    }, [stagingData]);

    useEffect(() => {
        const handleUpdateStagingData = async (data: UpdateParams) => {
            await _updateData(data);
        }

        if (updateStagingData) {
            handleUpdateStagingData(updateStagingData);
        }
    }, [updateStagingData]);

    useEffect(() => {
        const handleUpdateDeleteData = async (data: DeleteParams) => {
            await _deleteData(data);
        }

        if (deleteStagingData) {
            handleUpdateDeleteData(deleteStagingData);
        }
    }, [deleteStagingData]);

    return {
        data,
        sendData,
        refetch: fetchData,
        deleteData,
        updateData,
        loading,
        error,
    }
}

export default useDataSync;
```