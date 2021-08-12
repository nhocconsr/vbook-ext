function execute(url) {
    const newUrl = url.replace('.html','/')
    const bookId = url.split('/').pop().split('.')[0];
    const getBNS = Http.get('https://api.bachngocsach.com/api/story/'+ bookId).string()
    var getChap = JSON.parse(getBNS);
    var lastChap = getChap['chapters_count'];
    const json = Http.get('https://api.bachngocsach.com/api/story/'+bookId+'/chapter').params({'per_page': lastChap}).string()
    var book = JSON.parse(json);
    var allChap = book.data;
    const data = [];
    for (var i = 0; i < allChap.length; i++){
        var chap = allChap[i]
        data.push({
            name: chap['name'],
            url: newUrl+chap['slug']+'/'+chap['id']+'.html',
            host: "https://vip.backngocsach.com"
        })
    }
    return Response.success(data);
}
