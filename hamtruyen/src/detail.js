function execute(url) {
    const doc = Http.get(url).html();

    return Response.success({
        name: doc.select("h1.tentruyen").first().text(),
        cover: doc.select(".wrapper_image img").first().attr("src"),
        author: doc.select(".wrapper_info > p:nth-child(2)").first().text(),
        description: doc.select("p#tomtattruyen").html(),
        detail: doc.select(".wrapper_info > p:nth-child(2)").first().html()+'<br>'+doc.select(".wrapper_info > p:nth-child(3)").first().html()+'<br>'+doc.select(".wrapper_info > p:nth-child(4)").first().html(),
        host: "https://hamtruyen.vn",
        ongoing: doc.select(".wrapper_info > p:nth-child(2)").first().text().indexOf("Đang") >= 0
    });
}