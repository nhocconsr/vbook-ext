function execute(url) {
    let response = fetch(url);
    if(response.ok){
        let doc = response.html();
        return Response.success({
            name: doc.select(".dinfo > div:nth-child(1) > span").text(),
            cover: doc.select(".book img").first().attr("src"),
            author: doc.select(".dinfo > div:nth-child(2) > span").first().text(),
            description: doc.select("#des-info").html(),
            detail: doc.select(".dinfo > div:nth-child(2)").html()+'<br>'+doc.select(".dinfo > div:nth-child(3)").html(),
            host: "https://hotruyen.com"
        });
    }
}