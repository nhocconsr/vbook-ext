function execute(url) {
    var host = url.split('/truyen/')[0];
    var params = url.split('/truyen/')[1].split('/');
    var bookid = params[2];
    var currentid = params[3];
    var bookhost = params[0];
    var booksty = params[1];
    var currentidc = '';
    var request = Http.post(host)
    .headers({
        'Content-type': 'application/x-www-form-urlencoded',
        'Referer': url
        })
    .params({
        'sajax': 'readchapter',
        'sty': booksty,
        'c': currentid,
        'h': bookhost,
        'bookid': bookid,
        'c2': currentidc
    });
    var data = request.string();
    var content = JSON.parse(data).data;
    content = content.replace(/<i t=''h=''v='(.*?)'>(.*?)<\/i>/g,'')
    content = content.replace(/đạo ?<\/i>:/g, "nói</i>:");
    content = content.replace(/<\/?i.*?>/g, "");
    content = content.replace(/<span.*?>(.*?)<\/span>(<br>)?/g, "");
    //content = content.replace(/<\/?p.*?>/g, "");
    content = content.replace(/\n\t/g, "<br>");
    content = content.replace(/\s{2,}/g, " ");
    content = content.replace(/<a href=.*?<\/a>/g, "");
    if (url.indexOf("bxwxorg") > 0) {
        content = content.replace(/<\/?p.*?>/g, "");
        content = content.replace(/(Ta chiếm được.*:?)/g, "");
    }
    if (url.indexOf("uukanshu") > 0) {
        content = content.replace("UUKANSHU đọc sách www.uukanshu.com", "");
        content = content.replace(/<div.*?>(.*?)<\/div>/g, "");
        content = content.replace(/<p><\/p>\t<br>/g,"");
        content = content.replace(/<\/div>/g,"");
        content = content.replace(/\(https.*<br>/g,"");
    }
    if (url.indexOf("aikanshu") > 0) {
        content = content.replace(/<img.*?src="\/novel\/images.*?>/g, "");
    }
    if (url.indexOf("ciweimao") > 0) {
        content = content.replace(/<span>.*?<\/span>/g, "");
        content = content.replace(/<\/?p.*?>/g, "");
    }
    content = content.replace(/&(nbsp|amp|quot|lt|gt|bp|emsp);/g, "");
    content = content.replace(/(<br\/?>)+/g,"<br>");
    content = content.replace(/<\/p><br><br><p>/g,"<br><br>");
    content = content.replace(/ ([,\.!\?”]+)/g,"$1");
    //Đã lọc rác có thể. còn nhiều vcl ra ý. tự lọc đi
    return Response.success(content);
}