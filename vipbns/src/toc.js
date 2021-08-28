
function execute(url) {
    const maxChapterPerPage = 200;
    const newUrl = url.replace('.html','/')
    const bookId = url.split('/').pop().split('.').shift();
    const getBNS = Http.get('https://api.bachngocsach.com/api/story/'+ bookId)
    var getChap = JSON.parse(getBNS);
    var lastChap = getChap['chapters_count'];
    const data = [];
    for (let currentPage = 1; currentPage < Math.floor(lastChap / maxChapterPerPage) + 1; currentPage++) {
        const json = Http.get('https://api.bachngocsach.com/api/story/'+bookId+'/chapter').params({'per_page': maxChapterPerPage, 'page': currentPage}).string()
        var book = JSON.parse(json);
        var allChap = book.data;
        for (var i = 0; i < allChap.length; i++){
            var chap = allChap[i]
            data.push({
                name: chap['name'],
                url: newUrl+chap['slug']+'/'+chap['id']+'.html',
                host: "https://vip.backngocsach.com"
            })
        }
    }
    
    return Response.success(data);
}