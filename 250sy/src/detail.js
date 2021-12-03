function execute(url) {
    let response = fetch(url.replace('m.','www.'));
    if (response.ok) {
        let doc = response.html('gbk');
        let ongoing = (doc.select('lzico')) ? true : false;
        return Response.success({
            name: doc.select(".loca span").text(),
            cover: doc.select(".wleft img").first().attr("src"),
            author: doc.select("h1").text().split(' ').pop(),
            description: doc.select(".wright p").text(),
            detail: doc.select(".winfo span").last().text()+'<br>'+doc.select("h1").text().split(' ').pop(),
            ongoing : ongoing,
            host: "https://www.250sy.net"
        });
    }
    return null;
}