function execute(url) {
    const doc = Http.get(url).html();
    return Response.success(doc.select(".chapter-content").html());
}