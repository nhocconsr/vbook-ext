function execute(url) {
    const idChap = url.split('/').pop();
    var json = Http.get('https://novel.snssdk.com/api/novel/book/reader/full/v1/?item_id='+idChap).string();
    var data = JSON.parse(json).data.content;
    var doc = Html.parse(data);
    var content = doc.select('article').html();
    return Response.success(content);
}