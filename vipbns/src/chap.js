function execute(url){
    const chapId = url.match(/\d+/)[0];
    const json = Http.get('https://api.bachngocsach.com/api/chapter/'+chapId).string()
    if(json.match('Nhớ tôi')){
        var data = 'Đây là nội dung chương mất tiền mua ^^!<br>Mời bạn đăng nhập để mua và tiếp tục đọc truyện <br>Mua rồi mà vẫn bị lỗi thì liên hệ trong discord nhé!'
    }else{
        var content = JSON.parse(json);
        var data = content.chapter.content.replace(/(\n)\s*/g, '<br>');
    }
    return Response.success(data);
}