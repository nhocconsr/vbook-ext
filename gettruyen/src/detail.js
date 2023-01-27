function execute(url) {
    let response = fetch(url);
    if (response.ok) {
        let doc = response.html();
        return Response.success({
            name: doc.select("h1").text(),
            cover: doc.select("figure img").first().attr("src"),
            author: doc.select(".text-gray-200 div").text().replace(/Nguồn(.+)?: /g,'') || 'Unknow',
            description: doc.select(".leading-normal p").html(),
            detail: doc.select(".text-gray-200 div").html().replace(/\n/g,'<br>'),
            host: "https://taitruyen.org"
        });
    }
    return null;
}