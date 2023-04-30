function execute(url) {
    let response = fetch(url);
    if(response.ok){
        const doc = response.html()
        return Response.success({
            name: doc.select("h1").text(),
            cover: doc.select(".view img").first().attr("src"),
            author: doc.select("a[href~=author]").text(),
            description: doc.select(".mt-4 p").text(),
            detail: doc.select(".chip").text(),
            ongoing : doc.select('.text-sm').last().text().indexOf("hoàn thành") >= -1 ? false : true,
            host: "https://sttruyen.com",
        });
    }
    return null;
}