function decode(T, N) {
    function Base() {
        var _keyStr =
        //
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
        //
        ;
        this.decode = function(c) {
            var a = "", b, d, h, f, g, e = 0;
            c = c.replace(/[^A-Za-z0-9\+\/\=]/g, "");
            for (; e < c.length;) {
                b = _keyStr.indexOf(c.charAt(e++));
                d = _keyStr.indexOf(c.charAt(e++));
                f = _keyStr.indexOf(c.charAt(e++));
                g = _keyStr.indexOf(c.charAt(e++));
                b = b << 2 | d >> 4;
                d = (d & 15) << 4 | f >> 2;
                h = (f & 3) << 6 | g;
                a += String.fromCharCode(b);
                64 != f && (a += String.fromCharCode(d));
                64 != g && (a += String.fromCharCode(h));
            }
            return a = _utf8_decode(a)
        }
        function _utf8_decode(c) {
            for (var a = "", b = 0, d = 0, c2, c3; b < c.length;) {
                d = c.charCodeAt(b);
                if (128 > d) {
                    a += String.fromCharCode(d);
                    b++
                } else if (191 < d && 224 > d) {
                    c2 = c.charCodeAt(b + 1);
                    a += String.fromCharCode((d & 31) << 6 | c2 & 63);
                    b += 2
                } else {
                    c2 = c.charCodeAt(b + 1);
                    c3 = c.charCodeAt(b + 2);
                    a += String.fromCharCode((d & 15) << 12
                            | (c2 & 63) << 6 | c3 & 63);
                    b += 3;
                }
            }
            return a
        }
    }
    var B = new Base(), len, locate, str;
    T = T.split('');
    N = N.match(/\d+[a-zA-Z]+/g);
    // console.log(N);
    len = N.length;
    while (len--) {
        locate = parseInt(N[len]) & 255;
        str = N[len].replace(/\d+/g, '');
        T.splice(locate, str.length)
    }
    T = T.join('');
    // console.log(T);
    // console.log(B.decode(T));
    return JSON.parse(B.decode(T));
}