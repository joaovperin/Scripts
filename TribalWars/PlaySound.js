(function (a) {
    a = $('body').append('<audio src="http://www.soundjay.com/button/beep-07.wav" /></audio>').find('audio')[0];
    a.play();
    /*
        var promise = $.Deferred();
        return promise.promise();
        dialog.promise.resolve();
        dialog.promise.reject(err);
    */
})();

