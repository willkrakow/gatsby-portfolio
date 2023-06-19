const babelOptions = {
    presets: ["babel-preset-gatsby", "@babel/preset-typescript"],
    plugins: [
        [
            "babel-plugin-styled-components",
            {
                ssr: true,
            }
        ]
    ]
}

module.exports = require("babel-jest").default.createTransformer(babelOptions)