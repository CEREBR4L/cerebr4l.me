# Corn Frontend 

Angular (v1.2.25) Skeleton with sass, babel and minifying using gulp.

## What you need

- node installed
- npm installed
- git installed
- A terminal to bash

My walk through will be in the command line.

## How to use

Clone the repo and enter it and install dependences...
```
loonix$ git clone https://github.com/CEREBR4L/Corn-frontend.git
loonix$ cd Corn-frontend/
loonix$ npm install
```

Then run gulp, this will build and then run browserfiy - see example output.
```
loonix$ gulp
Using gulpfile ~/Documents/corn-front/gulpfile.js
Starting 'build'...
Starting 'clean:dist'...
Finished 'clean:dist' after 5.86 ms
Starting 'move'...
Finished 'move' after 20 ms
Starting 'sass'...
Starting 'babel'...
Finished 'sass' after 185 ms
Finished 'babel' after 179 ms
Starting 'babel'...
Starting 'templates'...
Starting 'images'...
Starting 'fonts'...
Finished 'templates' after 125 ms
Finished 'babel' after 131 ms
Starting 'useref'...
Finished 'useref' after 488 ms
Finished 'fonts' after 625 ms
Finished 'images' after 17 s
Starting 'remove-nonmin-js'...
Finished 'remove-nonmin-js' after 3.48 ms
Starting 'remove-nonmin-css'...
Finished 'remove-nonmin-css' after 742 μs
Finished 'build' after 17 s
Starting 'browserSync'...
Finished 'browserSync' after 26 ms
Starting 'default'...
Starting 'watch'...
Finished 'watch' after 28 ms
Finished 'default' after 28 ms
[BS] Access URLs:
 -------------------------------------
       Local: http://localhost:3000
 -------------------------------------
          UI: http://localhost:3001
 -------------------------------------
[BS] Serving files from: dist/
```

Once you have done this your default browser should pop up with a simple Corn landing page. 

You can not get into the code in the app folder and work on your projects without having to do the set up!

Using browserfiy and means your browser should reload and serve you the newest version of your code any time you save a file.

Any issues please log them [here](https://github.com/CEREBR4L/Corn-frontend/issues).

