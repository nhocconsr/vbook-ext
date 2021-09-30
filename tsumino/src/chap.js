function execute(url) {
    var getata = Http.get(url).string();
    var allPage = getata.match(/(\d+)<\/h1>/)[1]
    var doc = Http.get(url).html();
    var img = doc.select('#image-container').attr('data-cdn');
    var list = []
    for(var i = 1; i <= allPage ; i++){
        list.push(img.replace('[PAGE]',i))
    }
    return Response.success(list)
}