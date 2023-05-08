function execute(url) {
    let response = fetch(url.replace('m.','www.'));
    if (response.ok) {
        let doc = response.html();
        return Response.success({
            name: doc.select("h1.title").first().text(),
            cover: doc.select(".wrap-content-image img").first().attr("src"),
            author: null,
            description: doc.select("#gioithieutruyen").html(),
            detail: 'Cập Nhật : '+doc.select(".fa-clock-o + span").first().text()+'<br>Mới Nhất : '+doc.select(".fa-bolt + a").text(),
            ongoing: doc.select(".contiep").text().indexOf("Đang") != -1,
            host: "https://hamtruyen.info",
            type: url.indexOf("/truyen/") > 0 ? "novel" : "comic"
        });
    }
    return null;
}