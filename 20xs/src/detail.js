function execute(url){
    let sid = url.match(/\d+/g)[1];
    let response = fetch('http://www.20xs.org/'+sid);
    if (response.ok) {
        let doc = response.html();
        return Response.success({
            name: doc.select("#info h1").text(),
            cover: doc.select("#fmimg img").first().attr("src"),
            author: doc.select("#info p").get(0).text().replace('作 者：',''),
            description: doc.select("#intro p").get(1).text(),
            detail: doc.select("#info p").get(0).text()+'<br>'+doc.select("#info p").get(2).html(),
            host: "https://www.20xs.org"
        });
    }
    return null;
}