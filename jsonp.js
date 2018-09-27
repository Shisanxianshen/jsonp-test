function jsonp(url, options) {
    // 创建script标签
    var $script = document.createElement('script');
    // 解决缓存问题
    var f = url.indexOf('?') > - 1 ? '&' : '?';
    url += f + '_=' + Date.now();
    //  把参数拼接到url上面
    for(var i in options) {
        url += '&' + i + '=' + options[i];
    }
    $script.src = url;
    document.body.appendChild($script);
}