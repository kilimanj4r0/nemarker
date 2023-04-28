const pkg = require('./package')

module.exports = {
    apiPath: 'stubs/api',
    pageTitle: 'AI Bridge',
    webpackConfig: {
        output: {
            publicPath: `/static/${pkg.name}/${process.env.VERSION || pkg.version}/`
        },
        module: {
            rules: [{
                test: /\.(otf|eot|ttf|woff|woff2)$/i,
                type: 'asset/resource',
            }]
        }
    },
    navigations: {
        'nemarker.main': '/',
        'nemarker.about': '/about',
        'nemarker.landing': '/landing',
    },
    features: {
        'nemarker': {
            // add your features here in the format [featureName]: { value: string }
        },
    },
    config: {

    }
}
