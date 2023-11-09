const {src,dest,watch,series}=require('gulp');
const sass=require('gulp-sass')(require('sass'));

console.log('hi');

function buildStyle(){
    return src('index.scss').pipe(sass()).pipe(dest('css'));
}

function watchTask(){
    watch(['index.scss'],buildStyle);
}


exports.default=series(watchTask,buildStyle);