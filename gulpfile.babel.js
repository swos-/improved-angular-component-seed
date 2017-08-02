import gulp from 'gulp';
import templateCache from 'gulp-angular-templatecache';
import jsonServer from 'gulp-json-srv';
import sass from 'gulp-sass';
import browserify from 'browserify';
import concat from 'gulp-concat';
import gulpif from 'gulp-if';
import plumber from 'gulp-plumber';
import sourcemaps from 'gulp-sourcemaps';
import uglify from 'gulp-uglify';
import babelify from 'babelify';
import browserSync from 'browser-sync';
import yargs from 'yargs';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import util from 'gulp-util';
import ngAnnotate from 'gulp-ng-annotate';
import ngHtml2Js from 'browserify-ng-html2js'; // https://github.com/javoire/browserify-ng-html2js#b-with-gulp
import runSequence from 'run-sequence';

const server = jsonServer.create();
const argv = yargs.argv;
const root = 'src/app';

const paths = {
    api: 'data.json',
    dist: './dist/',
    js: './dist/js/',
    index: 'src/index.html',
    styles: [`${root}/**/*.scss`],
    scripts: [
        `${root}/**/*.js`
    ],
    css: [
        'bootstrap-css-only/css/bootstrap.min.css'
    ],
    fonts: [
        'bootstrap-css-only/fonts/glyphicons-halflings-regular.eot',
        'bootstrap-css-only/fonts/glyphicons-halflings-regular.svg',
        'bootstrap-css-only/fonts/glyphicons-halflings-regular.ttf',
        'bootstrap-css-only/fonts/glyphicons-halflings-regular.woff',
        'bootstrap-css-only/fonts/glyphicons-halflings-regular.woff2'
    ],
    modules: [
        'angular/angular.js',
        '@uirouter/release/angular-ui-router.js',
        'angular-ui-boostrap/dist/ui-bootstrap.js',
        'angular-ui-boostrap/dist/ui-bootstrap-tpls.js'
    ],
    templates: [
        'src/app/**/*.html'
    ]
}

function interceptErrors(error) {
    let args = Array.prototype.slice.call(arguments);

    // Send error to notification center with gulp-notify
    notify.onError({
      title: 'Compile Error',
      message: '<%= error.message %>'
    }).apply(this, args);

    // Keep gulp from hanging on this task
  this.emit('end');
}

gulp.task('html', () => {
    return gulp.src(paths.index)
        .on('error', interceptErrors)
        .pipe(gulp.dest(paths.dist));
});

gulp.task('templates', () => {
    return gulp.src(paths.templates)
        .pipe(templateCache('templates.js', {module: 'app', standalone: false}))
        .pipe(gulp.dest(paths.js))
});

gulp.task('bundle', () => {
    let b = browserify({
        entries: './src/app/app.module.js',
        debug: true,
        transform: [babelify.configure({
            presets: ['es2015']
        }), ngHtml2Js({
            module: 'app.templates'
        })]
    });

    return b.bundle()
        .pipe(source('bundle.js'))
        .pipe(buffer())
        .pipe(gulpif(!argv.prod, sourcemaps.init({ loadMaps: true })))
        .pipe(ngAnnotate())
        .pipe(gulpif(argv.prod, uglify()))
        .on('error', util.log)
        .pipe(gulpif(!argv.prod, sourcemaps.write('./')))
        .pipe(gulp.dest(paths.dist + 'js/'));
});

gulp.task('vendor:scripts', [], () => {
  return gulp.src(paths.modules.map(item => 'node_modules/' + item))
    .pipe(concat('vendor.js'))
    .pipe(gulpif(argv.prod, uglify()))
    .pipe(gulp.dest(paths.dist + 'js/'));
});

gulp.task('vendor:css', () => {
    return gulp.src(paths.css.map(item => 'node_modules/' + item))
    .pipe(gulp.dest(paths.dist + 'css/'))
});

gulp.task('vendor:fonts', () => {
    return gulp.src(paths.fonts.map(item => 'node_modules/' + item))
    .pipe(gulp.dest(paths.dist + 'fonts/'))
})

gulp.task('styles', () => {
  return gulp.src(paths.styles)
    .pipe(sass({outputStyle: 'compressed'})
    .on('error', sass.logError))
    .pipe(concat('app.css'))
    .pipe(gulp.dest(paths.dist + 'css/'));
});

gulp.task('default', ['vendor:scripts', 'bundle', 'html', 'vendor:css', 'watch', 'styles', 'vendor:fonts'], () => {
    browserSync({
        'server': paths.dist
    });
});

gulp.task('reload', () => {
    return browserSync.reload();
});

gulp.task('api', () => {
    return gulp.src('data.json')
        .pipe(server.pipe());
});

gulp.task('watch', () => {
    gulp.watch(paths.scripts, () => {
        runSequence('bundle', 'reload');
    });

    gulp.watch(paths.index, () => {
        runSequence('html', 'bundle', 'reload');
    });

    gulp.watch(paths.styles, () => {
        runSequence('styles', 'reload');
    });

    gulp.watch(paths.templates, () => {
        runSequence('templates', 'bundle', 'reload');
    });
});
