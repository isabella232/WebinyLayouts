var gulp        = require('gulp'),
    sass        = require('gulp-sass'),
    prefix      = require('gulp-autoprefixer'),
    uglify      = require('gulp-uglify'),
    concat      = require('gulp-concat'),
    cssnano      = require('gulp-cssnano'),
    imagemin    = require('gulp-imagemin'),
    sourcemaps  = require('gulp-sourcemaps'),
    pngquant    = require('imagemin-pngquant'),
    browserSync = require('browser-sync'),
    reload      = browserSync.reload;

var public_folder = 'public';

function errorLog (error) {
    console.log(error.message.toString());
    this.emit('end');
}

var bs_config = {
    proxy: "master-layout.webiny.dev",
    online: false,
    notify: false
}

gulp.task('serve', ['sass'], function(){
    browserSync(bs_config);

    gulp.watch('resources/sass/**/*.scss', ['sass']);
    gulp.watch('resources/js/**/*.js', ['scripts']).on('change', reload);
    gulp.watch('resources/fonts/*', ['fonts']).on('change', reload);
    gulp.watch('resources/img/*', ['imagemin']).on('change', reload);
    gulp.watch(public_folder +'/**/*.js').on('change', reload);
    gulp.watch(public_folder +'/**/*.html').on('change', reload);
    gulp.watch(public_folder +'/**/*.php').on('change', reload);
});

gulp.task('sass', function() {
    return gulp.src(['resources/sass/webiny.scss', 'resources/sass/pages/dashboard/dashboard.scss', 'resources/sass/pages/editor/webiny_editor.scss'])
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'expanded'}))
        .on('error', errorLog)
        .pipe(prefix({
            browsers: ['last 10 versions']
        }))
        // .pipe(cssnano())
        .pipe(sourcemaps.write('maps', {
            identityMap: true,
            debug: true
        }))
        .pipe(gulp.dest(public_folder + '/css'))
        .pipe(browserSync.stream({match: '**/*.css'}));
});

gulp.task('scripts', function() {
    return gulp.src([
            'resources/js/onload.js'
        ])
        .pipe(concat('onload.js'))
        // .pipe(uglify())
        .on('error', errorLog)
        .pipe(gulp.dest(public_folder +'/js'));
});

gulp.task('imagemin', function () {
    return gulp.src('resources/img/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest(public_folder +'/img'));
});

gulp.task('fonts', function () {
    return gulp.src('resources/fonts/*')
        .pipe(gulp.dest(public_folder +'/fonts'));
});

gulp.task('default', ['sass', 'scripts', 'imagemin', 'fonts', 'serve']);