function execute(url) {
    let response = fetch(url);
    if(response.ok){
        const doc = response.html()
        return Response.success({
            name: doc.select("h1").text(),
            cover: doc.select(".view img").first().attr("src"),
            author: doc.select("a[href~=author]").text(),
            description: doc.select(".container p").first().text(),
            detail: doc.select(".mb-2").html(),
            host: "https://sttruyen.com",
        });
    }
    return null;
}