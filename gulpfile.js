var gulp = require('gulp');

var winInstaller = require('electron-windows-installer');



gulp.task('create-windows-installer', function (done) {

    winInstaller({

        appDirectory: './node_modules/electron/dist',

        outputDirectory: './release',

        arch: 'ia32',

        authors: "Mr. Rainbow",

        version: "1.0.0",

        iconUrl: "images/favicon.ico",

        setupIcon: "images/favicon.ico",

        loadingGif: "rainbow.gif",

        noMsi:true

    }).then().catch();

});