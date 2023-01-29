function execute(url) {
    const doc = fetch(url).html()
    let last_chap = doc.select('.wp-manga-chapter a').first().attr('href');
    let stype = check_type(last_chap);
    Console.log(stype)
    return Response.success({
        name: doc.select("h1").text(),
        cover: doc.select(".summary_image img").first().attr("data-src"),
        author: doc.select(".author-content a").first().text() || '^^!',
        description: doc.select(".desc").first().text(),
        detail:doc.select(".post-content .post-content_item .summary-content").first().text() +'<br>'+doc.select(".post-content .post-content_item .summary-content").last().text(),
        ongoing: doc.select(".post-status").html().indexOf("OnGoing") != -1,
        host: "https://truyencool.net",
        type: stype === false ? "comic" : "novel"
    });
}
function check_type(url) {
    let getx = fetch(url).html();
    let content = getx.select('.reading-content .text-left').text()
    if (content){
        return ;
    }else{
        return false;
    }
}