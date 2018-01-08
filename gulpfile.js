var gulp = require('gulp');
var cleanhtml = require('gulp-cleanhtml');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename'); 
var systemBuilder = require('systemjs-builder');

const dist = "dist"; // FTP uploader needs this

var paths = {
    bower: './bower_components/',
    design: './bower_components/material-design-template/www/',
    npm: './node_modules/',
    assets: `./${dist}/assets/`,
    src: './src/',
    html: './src/**/*.html'
};


gulp.task('copy:html', function () {
    console.log(paths.html);
    return gulp.src(paths.html)
               .pipe(cleanhtml())
               .pipe(gulp.dest(`./${dist}`));
});
gulp.task('copy:app', function(){
    return gulp.src(['./pre/**/*', '!./pre/**/*.map'])
                .pipe(gulp.dest(`./${dist}/app`));
});
gulp.task('copy:systemjs', function(){
    return gulp.src(['./src/systemjs.config.js'])
                .pipe(gulp.dest(`./${dist}/assets/js`));
});

// Create Materialize bundle (NOT WORKING)
gulp.task('copy:js:materialize', function () {
    var builder = new systemBuilder('./', {
        paths: {"react-materialize": "node_modules/react-materialize/lib"},
        packages: {"react-materialize": {main: 'index.js', defaultExtension: "js"}}
    });
    // create the bundle we use from systemjs.config.js
    builder.bundle('react-materialize', paths.assets + 'js/libs/react-materialize.umd.min.js', {
        sourceMaps: false,
        minify: true,
        mangle: true
    });
});

gulp.task('copy:js', function(){
    return gulp.src([
        paths.design + 'js/*.js'
        ,paths.npm + `react/${dist}/react.js`
        ,paths.npm + `react-dom/${dist}/react-dom.js`
        ,paths.npm + 'react-router-dom/umd/react-router-dom.js'
        ,paths.npm + 'react-validation/lib/build/validation.js'
        ,paths.npm + 'react-router/umd/react-router.js'
        ,paths.npm + 'react-facebook-login-component/dist/react-facebook-login-component.js'
        ,paths.npm + 'react-google-login-component/dist/react-google-login-component.js'
        // ,paths.npm + 'invariant/invariant.js'
        // ,paths.npm + 'systemjs-plugin-babel/plugin-babel.js'
        // ,paths.npm + 'systemjs-plugin-babel/systemjs-babel-browser.js'
        ,paths.npm + 'redux/dist/redux.js'
        ,paths.bower + `system.js/${dist}/system.js`
        ])
        .pipe(gulp.dest(paths.assets + 'js/libs'))
});
gulp.task('copy:js-with-path', function(){
    return gulp.src([
        ,paths.npm + 'object-assign/index.js'
        ])
        .pipe(gulp.dest(paths.assets + 'js/libs/object-assign/'))
});
gulp.task('copy:redux-with-path', function(){
    return gulp.src([
        ,paths.npm + 'react-redux/dist/react-redux.js'
        ])
        .pipe(rename('index.js'))
        .pipe(gulp.dest(paths.assets + 'js/libs/react-redux/'))
});
// gulp.task('copy:hoist-with-path', function(){
//     return gulp.src([
//         ,paths.npm + 'hoist-non-react-statics/index.js'
//         ])
//         .pipe(gulp.dest(paths.assets + 'js/libs/hoist-non-react-statics/'))
// });
// gulp.task('copy:lodash-with-path', function(){
//     return gulp.src([
//         ,paths.npm + 'lodash/index.js'
//         ])
//         .pipe(gulp.dest(paths.assets + 'js/libs/lodash/'))
// });
// gulp.task('copy:js:special', ['copy:js-with-path', 'copy:redux-with-path', 'copy:hoist-with-path', 'copy:lodash-with-path']);

gulp.task('copy:css', function(){
    return gulp.src([
        '!' + paths.design + '**/*.min.css*',
        paths.bower + 'materialize/dist/css/materialize.css',
        paths.bower + 'font-awesome/css/font-awesome.css',
        paths.design + 'css/style.css'])
        .pipe(concat('min.css'))
        //.pipe(cssmin())       
        .pipe(gulp.dest(paths.assets + 'css'))
});

gulp.task('copy:fonts', function(){
    return gulp.src([
        paths.design + 'fonts/*.*',
        paths.bower + 'materialize/fonts/**',
        paths.bower + 'font-awesome/fonts/fontawesome-webfont.woff2'])
        .pipe(gulp.dest(paths.assets + 'fonts'))
});

gulp.task('copy:font', function(){
    return gulp.src([
        paths.design + 'font/material-design-icons/*.*'])
        .pipe(gulp.dest(paths.assets + 'fonts/material-design-icons'))
});

gulp.task('copy:img', function(){
    return gulp.src([
        paths.design + 'img/*.*',
        paths.src + 'assets/img/*.*'])
        .pipe(gulp.dest(paths.assets + 'img'))
});
// , 'copy:js-with-path', 'copy:js:special'
gulp.task('build', ['copy:html', 'copy:js', 'copy:js-with-path', 'copy:redux-with-path', 'copy:css', 'copy:fonts', 'copy:font', 'copy:img', 'copy:systemjs', 'copy:app']);

gulp.task('default', ['build']);