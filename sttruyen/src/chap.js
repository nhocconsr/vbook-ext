load("en.js");
load('base64.js');
function execute(url) {
    var doc = Http.get(url).string();
    var checkPay = doc.match('Mở Khóa Chương');
    if(checkPay){
        html = 'Đây là chương truyện có phí!<br> Nếu bạn muốn đọc chương này vui lòng đăng nhập vào website và thanh toán để tiếp tục đọc truyện ^^!<br>Nếu bạn đã mua chương rồi mà vẫn bị lỗi vui lòng liên hệ email: Phamgiavang@gmail.com <br>(Trường hợp bạn đọc ở Vbook ^^!)';
    }else{
        const packed = doc.match(/\encode\(".*?"\)/)[0];
        const marks = ['encode(\/"', '\",'];
        var params = packed.substring(packed.indexOf(marks[0]) + marks[0].length, packed.length-2);
        var index0 = params.indexOf('\",');
        var param1 = params.substring(0,index0)
        var param2 = params.substring(index0 + 3,params.length)
        var html = encode(param1, param2)
            .replace(/[\r\n]/g,'')
            .replace('Nguồn: STTRUYEN.COM','')
    }
    return Response.success(html);
}