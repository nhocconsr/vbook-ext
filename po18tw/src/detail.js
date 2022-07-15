function execute(url) {
    let response = fetch(url);
    if(response.ok){
        const doc = response.html()
        return Response.success({
            name: doc.select("h1.book_name").text(),
            cover: doc.select(".book_cover img").first().attr("src"),
            author: doc.select(".book_author").text(),
            description: doc.select(".B_I_content").first().text(),
            detail: doc.select(".book_info_list").html(),
            host: "https://www.po18.tw",
        });
    }
    return null;
}