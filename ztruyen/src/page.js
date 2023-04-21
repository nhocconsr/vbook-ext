function execute(url) {
    var list = [];
    var doc = fetch(url).html();
    if (doc) {
        var page = doc.select(".pagination").first().select('li.disabled + li').text()
        if(!page){
            list.push(url)
        }else{
            for (var i = 0; i <= page; i++)
                list.push(url + "/?paged=" + i + '#chapter_list');
        }
        return Response.success(list);
    }
    return null;
}