module.exports = {
    css: {
        loaderOptions: {
            sass: {
                additionalData: `@import "@/assets/scss/variable.scss";`
            },
        },
    },
    publicPath: process.env.NODE_ENV === 'production' ?
        '/alan-project/' : '/'
};