function execute(url) {
    const slug = url.split('/')[4]
    const bookId = url.split('/').pop().split('.').shift();
    const json = Http.get('https://api.bachngocsach.vip/api/story/'+ bookId +'/chapter?order_by=asc').string();
    var allPage = JSON.parse(json).chapters.last_page;
    var list = [];
    if (json) {
        for (var i = 1; i <= allPage; i++)
            list.push("https://api.bachngocsach.vip/api/story/"+bookId+"/chapter?per_page=50&page=" + i + "&order_by=asc|"+slug);
        return Response.success(list);
    }
    return null;
}