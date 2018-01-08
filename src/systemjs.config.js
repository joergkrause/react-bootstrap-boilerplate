(function (global) {

    System.config({

        packages: {
            'start': {
                main: './index.js',
                defaultExtension: 'js'
            },
            'lodash': {
                defaultExtension: 'js'
            },
            'react-redux': {
                main: 'index.js'
            }
        },
        map: {
            // 'hoist-non-react-statics': '/assets/js/libs/hoist-non-react-statics/index.js',
            // 'invariant': '/assets/js/libs/invariant.js',
            // 'lodash': '/assets/js/libs/lodash/index.js',
            // 'plugin-babel': '/assets/js/libs/plugin-babel.js',
            // 'systemjs-babel-build': '/assets/js/libs/systemjs-babel-browser.js',
            'react': '/assets/js/libs/react.js',
            'react-dom': '/assets/js/libs/react-dom.js',
            'react-router': '/assets/js/libs/react-router.js',
            'react-router-dom': '/assets/js/libs/react-router-dom.js',
            'react-materialize': '/assets/js/libs/react-materialize.js',
            'react-facebook-login-component': '/assets/js/libs/react-facebook-login-component.js',
            'react-google-login-component': '/assets/js/libs/react-google-login-component.js',
            'redux': '/assets/js/libs/redux.js',
            'react-redux': '/assets/js/libs/react-redux/',
            'object-assign': '/assets/js/libs/object-assign/index.js',
            'jquery': '/assets/js/libs/jquery-2.1.1.min.js',
            'start': '/app'
        },
        paths: {
            '/assets/js': '/assets/js'
        }
    });

})(this);

// https://github.com/kurtinatlanta/react-redux-issue
