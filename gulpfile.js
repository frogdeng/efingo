var gulp = require('gulp'),
    fs = require('fs'),
    glob = require('glob'),
    
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    plumber = require('gulp-plumber'),
    browserSync = require('browser-sync').create(),

    twig = require('gulp-twig'),
    foreach = require('gulp-foreach'),

    data = require('gulp-data'),
    path = require('path'), 
    bourbon = require("node-bourbon").includePaths;





// sass task
gulp.task('sass', function () {
    return gulp.src('./assets/sass/*.{scss,sass}')
        .pipe(plumber())
        .pipe(sass({
            includePaths: [bourbon, 'node_modules/susy/sass']
        }))
        .pipe(autoprefixer({
                browsers: ['last 2 versions','ie >= 10'],
                cascade: true
            }))
        .pipe(sass({errLogToConsole: true}))
        .pipe(gulp.dest('./public/css'))
});



// twig
function getJsonData (file, cb) {
    glob("public/_data/*.json", {}, function(err, files) {
        var data = {};
        if (files.length) {
            files.forEach(function(fPath){
                var baseName = path.basename(fPath, '.json');
                data[baseName] = JSON.parse(fs.readFileSync(fPath));
            });
        }
        cb(undefined, data);
    });
}
gulp.task('twig', function () {
    return gulp.src('./views/*.twig')
        .pipe(plumber({
            errorHandler: function (error) {
                console.log(error.message);
                this.emit('end');
        }}))
        .pipe(data(getJsonData))
        .pipe(foreach(function(stream,file){
            return stream
            .pipe(twig({
                extname: '.html'
            }));
        }))
        .pipe(gulp.dest('./public/'));
});

gulp.task('twig-watch',['twig'],browserSync.reload);





// browser-sync
gulp.task('browser-sync', function() {
    var includePaths = [
        "public/css/*.css",
        "public/js/*.js",
        "public/*.html",
        "public/*.html",
        "public/img/",
    ];
    browserSync.init(includePaths,{
        server: {
            baseDir: "./public/",
            index: "index.html"
        }
    });
});


// watch
gulp.task('watch',function(){
    gulp.watch('./assets/sass/*.sass', ['sass']);
    gulp.watch(['./views/*.twig','./views/_template/*.twig','./views/component/*.twig','./public/_data/*.json'],['twig-watch']);
    gulp.watch('./public/img/*.jpg', browserSync.reload);
    gulp.watch('./public/img/*.png', browserSync.reload);
})


// default task
gulp.task('default', ['sass', 'watch','twig','browser-sync']);













