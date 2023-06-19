import * as stryled from "jest-styled-components"

stryled.styleSheetSerializer.setStyleSheetSerializerOptions({
    addStyles: false,
})
expect.addSnapshotSerializer(stryled.styleSheetSerializer)
