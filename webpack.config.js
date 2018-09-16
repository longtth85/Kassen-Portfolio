module.exports = {
    entry: "./public/javascripts/entry.js",
    output: {
        path: __dirname + "/public/dist",
        filename: "bundle.js"
    },
    mode: "production"
};