var path = require('path')
var utils = require('./utils')
var config = require('../config')
var vueLoaderConfig = require('./vue-loader.conf')

function resolve(dir) {
    return path.join(__dirname, '..', dir)
}

function convert(str) {
    str = str.replace(/(&#x)(\w{4});/gi, function($0) {
        return String.fromCharCode(parseInt(encodeURIComponent($0).replace(/(%26%23x)(\w{4})(%3B)/g, '$2'), 16));
    });
    return str;
}

function wrap(render) {
    return function () {
        return render.apply(this, arguments)
        .replace('<code class="', '<code class="hljs ')
        .replace('<code>', '<code class="hljs">');
    };
}

var markdown = require('markdown-it')({
    preset: 'default',
    breaks: true,
    preprocess: function (MarkdownIt, source) {
        MarkdownIt.renderer.rules.table_open = function () {
            return '<table class="table">';
        };
        MarkdownIt.renderer.rules.fence = wrap(MarkdownIt.renderer.rules.fence);
        return source;
    }
})

markdown
    .use(require('markdown-it-anchor'), {
        level: 2,
        permalink: true,
        permalinkBefore: true
    })
    .use(require('markdown-it-container'), 'component', {
        validate: function(params) {
            return params.trim().match(/^component\s*(.*)$/);
        },

        render: function(tokens, idx) {
            var m = tokens[idx].info.trim().match(/^component\s*(.*)$/);
            if (tokens[idx].nesting === 1) {
                var description = (m && m.length > 1) ? m[1] : '';
                var content = tokens[idx + 1].content;
                var html = convert(content).replace(/(<[^>]*)=""(?=.*>)/g, '$1');
                var descriptionHTML = description
                ? markdown.render(description)
                : '';

                return `<component-view class="component-box">
                    <div class="source" slot="source">${html}</div>
                    ${descriptionHTML}
                    <div class="highlight" slot="highlight">`;
            }
        return '</div></component-view>\n';
        }
    });


module.exports = {
    entry: {
        app: './src/main.js'
    },
    output: {
        path: config.build.assetsRoot,
        filename: '[name].js',
        publicPath: process.env.NODE_ENV === 'production'
        ? config.build.assetsPublicPath
        : config.dev.assetsPublicPath
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': resolve('src')
        }
    },
    module: {
        rules: [
            {
                test: /\.md$/,
                loader: 'vue-markdown-loader',
                options: markdown
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: vueLoaderConfig
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [resolve('src'), resolve('test')]
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('img/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
                }
            }
        ]
    }
}
