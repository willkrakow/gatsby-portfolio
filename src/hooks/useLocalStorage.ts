import React, { useCallback, useEffect, useState } from 'react';

const isBrowser = () => typeof window !== 'undefined';

const useLocalStorage = <T extends string | any>(key: string) => {
    const [data, setData] = useState<T | null>(null);
    const [dataType, setDataType] = useState<'string' | 'object' | null>(null);

    const getItem = useCallback(() => {
        if(!isBrowser()) return;

        return window.localStorage.getItem(key)
    }, [])

    const setItem = useCallback((value: T) => {
        if (!isBrowser()) return;
        let stringVal;
        const isString = typeof value === 'string';
        if(isString){
            setDataType('string');
        } else {
            setDataType('object');
        }
        stringVal = isString ? value : JSON.stringify(value);
        try {
            window.localStorage.setItem(key, stringVal);    
        } catch(err){
            console.log(err)
        } finally {
            return window.localStorage.getItem(key)
        }
    }, [])

    const deleteItem = useCallback(() => {
        if(!isBrowser()) return;

        try {
            window.localStorage.removeItem(key);
        } catch(err){
            console.log(err)
        }
    }, [])

    useEffect(() => {
        const val = window.localStorage.getItem(key);
        if(val === null) {
            setData(null)
            return;
        };

        if(dataType === 'object'){
            try {
                const jsonObject = JSON.parse(val);
                setData(jsonObject);
                return;
            } catch(err){
                console.log(err);
            }
        }
        if(dataType === 'string'){
            setData(val as T)
            return
        }

        if(dataType === null){
            try {
                const jsonObject = JSON.parse(val);
                setData(jsonObject);
                setDataType('object');
                return
            } catch(err){
                console.log(err);
                setData(val as T);
                setDataType('string');
            }
        }
    }, [key])

    return {
        getItem,
        setItem,
        deleteItem,
        data,
        dataType,
    }
}

export default useLocalStorage;