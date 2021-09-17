function execute(url) {
    const bookId = url.split('/').pop().split('.').shift();
    const GBns = Http.get('https://api.bachngocsach.com/api/story/'+ bookId).string();
    var allPage = Math.round(JSON.parse(GBns).chapters_count/100) + 1;
    var list = [];
    if (GBns) {
        for (var i = 1; i <= allPage; i++)
            list.push("https://api.bachngocsach.com/api/story/"+bookId+"/chapter?per_page=100&page=" + i + "&order_by=asc");
        return Response.success(list);
    }

    return Response.success(list);
}