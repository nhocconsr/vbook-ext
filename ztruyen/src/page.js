function execute(url) {
    var list = [];
    var doc = fetch(url).html();
    if (doc) {
        let allPage = (doc.select(".pagination").first().select('.page-item')).length
        if(allPage < 2){
            list.push(url)
        }else{
            var page = doc.select(".pagination").first().select('.page-item').get([allPage - 2]).text()
            for (var i = 1; i <= page; i++)
                list.push(url + "/?paged=" + i + '#chapter_list');
        }
        return Response.success(list);
    }
    return null;
}