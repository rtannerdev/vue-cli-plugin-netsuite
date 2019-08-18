module.exports = (api, options) => {
    console.log({
        generatorArgs: options
    });
    if(options.useAxios) {
        api.extendPackage({
            dependencies: {
                "axios": "^0.19.0"
            }
        })
    }
}