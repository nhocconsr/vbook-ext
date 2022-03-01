function execute(url) {
    let load = fetch(url);
    let host = url.split('/truyen/')[0];
    let params = url.split('/truyen/')[1].split('/');
    let bookid = params[2];
    let currentid = params[3];
    let bookhost = params[0];
    let booksty = params[1];
    let currentidc = '';
    let response = fetch(host+'/index.php',{
        method: "POST",
        headers: {
            'Content-type': 'application/x-www-form-urlencoded',
            'Referer': url
        },
        queries: {
            sajax : 'readchapter',
            bookid : bookid,
            h : bookhost,
            c2 : currentidc,
            c : currentid,
            sty : booksty  
        }
    });
    if(response.ok){
        var content = response.json().data;
        content = content.replace(/<i<\/i>/g,"");
        content = content.replace(/<i h=''t=''v='(.*?)'.*?>(.*?)<\/i>/g,'');
        content = content.replace(/<i t=''h=''v='(.*?)'.*?>(.*?)<\/i>/g,'');
        //content = content.replace(/<\/?p.*?>/g, "");
        content = content.replace(/<(\/)?i.*?>/g, "");
        content = content.replace(/<span.*?>(.*?)<\/span>(<br>)?/g, "");
        content = content.replace(/(\n)?\t/g, "<br>");
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
    return Response.error;
}