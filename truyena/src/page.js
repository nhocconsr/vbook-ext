function execute(url) {
    var list = [];
    var doc = fetch(url + "/").html();
    if (doc) {
        var page = doc.select(".pagination .paging-mobile").last().select("a").attr('href').split(/[=#]/)[1];
        if(!page){
            list.push(url)
        }else{
            for (var i = 0; i <= page; i++)
                list.push(url + "/?page=" + i + '#section2');
        }
        return Response.success(list);
    }
    return null;
}