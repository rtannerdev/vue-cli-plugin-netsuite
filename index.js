const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');

module.exports= (api,projectOptions) => {

    console.log({
        indexOpts: projectOptions
    });

    api.configureWebpack(config => {

        config.plugins.push(new HtmlWebpackPlugin({
            template: 'public/index.html',  //template file to embed the source
            inlineSource: '.(js|css)$' // embed all javascript and css inline
        }));
        config.plugins.push(new HtmlWebpackInlineSourcePlugin());
        config.optimization.splitChunks=false;
    })
}