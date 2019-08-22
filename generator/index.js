module.exports = (api, options) => {
    // console.log({
    //     generatorArgs: options
    // });
    if(options.useAxios) {
        api.extendPackage({
            dependencies: {
                "axios": "^0.19.0"
            },
            devDependencies:{
                "html-webpack-inline-source-plugin": "0.0.10",
                "html-webpack-plugin": "^3.2.0"
            }
        });

        api.render('./template')

        const importString="import axiosConfig from './netsuite/axiosConfig'";

        api.injectImports(api.entryFile,importString);
    }
}