function execute(url) {
    var doc = Http.get(url).html();
    var content = doc.select("div.chapter-content").html();
    var content = content.replace('Bạn đang đọc truyện trên 123truyen.com , Chúc bạn đọc truyện vui vẻ!','');
    var content = content.replace('Ủng hộ theo dõi kênh Audio trang đang phát triển nha các đạo hữu <3 Các đạo hữu bấm vô link kênh : ','');
    var content = content.replace(/<a[^>]*>([^<]+)<\/a>/g,'');
    return Response.success(content);
}