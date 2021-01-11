function execute(url) {
    function capitalize(s){
        return s[0].toUpperCase() + s.slice(1);
    }
    const doc = Http.get(url).html();
    return Response.success({
        name: capitalize(doc.select("h1.title").first().text()),
        cover: doc.select(".wrap-content-image img").first().attr("src"),
        author: doc.select(".list-info li:nth-child(1)").first().text(),
        description: doc.select("ul.list-info > li:nth-child(7)").html(),
        detail: doc.select(".list-info li:nth-child(1)").html()+'<br>'+doc.select(".list-info li:nth-child(4)").html(),
        host: "http://truyentop1.com",
        ongoing: doc.select(".list-info li:nth-child(1)").text().indexOf("Đang") >= 0
    });
}