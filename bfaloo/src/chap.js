function execute(url) {
    var doc = Http.get(url).html();
    var htm = doc.select(".noveContent").html();
    if (htm.match('您还没有登录，请登录后在继续阅读本部小说') != null) {
        var content = 'Đây là chương VIP. Bạn vui lòng đăng nhập trang web và tự mua chương VIP nhé!<br>Nếu vẫn lỗi liên hệ email : phamgiavang@gmail.com hoặc Discord'
        return Response.success(content)
    }else{
        doc.select(".noveContent p").last().remove();
        var htm = doc.select(".noveContent").html();
        htm = htm.replace(/<a[^>]*>([^<]+)<\/a>/g,'');
        htm = htm.replace(/&(nbsp|amp|quot|lt|gt);/g, "");
        return Response.success(htm);
    }
    
}