const glob = require('glob');
const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin"); // 动态生成html插件
module.exports = {
    getFiles: function getFiles() {
        let entryFile = {};
        const files = glob.sync("src/views/**/app.tsx");
        if(files && files.length){
            files.map((file) => {
                let name = file.match(/(?<=views\/).*?(?=\/app.tsx)/);
                entryFile[name] = path.join(__dirname,`../${file}`)
            })
        }
        return entryFile;
    },

    getPlugins: function getPlugins() {
        let plugins = [];
        const files = glob.sync("src/views/**/app.tsx");
        if(files && files.length){
            files.map(file => {
                let name = file.match(/(?<=views\/).*?(?=\/app.tsx)/);
                plugins.push( new HtmlWebpackPlugin({
                    template: path.resolve(__dirname, '../src/index.html'),
                    filename: `${name}/index.html`,
                    chunks: [`${name}`],
                    inject: true,
                })) 
            })
            return plugins;
        }
    }
}

