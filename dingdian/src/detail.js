function execute(url) {
    const idBook = url.match(/\d+(?=\D*$)/).pop();
    const doc = Http.get('https://www.dingdian666.com/xiaoshuo/'+idBook+'/').html();
    return Response.success({
        name: doc.select("meta[property=og:novel:book_name]").attr('content'),
        cover: doc.select(".border_left a img").attr("src"),
        author: doc.select("meta[property=og:novel:author]").attr('content'),
        description: doc.select(".hang_3").text(),
        detail: doc.select(".hang_1").first().html()+'<br>'+doc.select("meta[property=og:novel:author]").attr('content'),
        ongoing : doc.select(".hang_1").html().indexOf("连载中") != -1,
        host: "https://www.dingdian666.com"
    });
}