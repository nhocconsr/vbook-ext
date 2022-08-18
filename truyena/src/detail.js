function execute(url) {
    let response = fetch(url + '/');
    if(response.ok){
        let doc = response.html();
        return Response.success({
            name: doc.select("h1.story-title").first().text(),
            cover: doc.select("img.book_cover").first().attr('src').replace('//','https://'),
            author: doc.select(".book_info a[href~=tac-gia]").first().text() || 'Unknown',
            description: doc.select("#story_description").html().replace(/<div id="func-btns">(.*?)<\/div>/g, ''),
            detail: doc.select("table > tbody > tr:nth-child(1)").html()+'<br>'+doc.select("table > tbody > tr:nth-child(3)").html()+'<br>'+doc.select("table > tbody > tr:nth-child(4)").html(),
            host: "https://truyena.net",
        });
    }
    return null;
}