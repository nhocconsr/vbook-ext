function execute(url) {
    const bookId = url.split('/').pop().split('.').shift();
    const json = Http.get('https://api.bachngocsach.com/api/story/'+ bookId +'/chapter?order_by=asc').string();
    var allPage = JSON.parse(json).chapters.last_page;
    var list = [];
    if (json) {
        for (var i = 1; i <= allPage; i++)
            list.push("https://api.bachngocsach.com/api/story/"+bookId+"/chapter?per_page=50&page=" + i + "&order_by=asc");
        return Response.success(list);
    }
    return Response.success(json);
}