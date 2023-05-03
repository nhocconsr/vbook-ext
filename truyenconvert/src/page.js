function execute(url) {
    var list = [];
    var doc = fetch(url).html();
    if (doc) {
        let allPage = doc.select(".pagination").first().select('.last a').attr('href').split('=').pop()
        if(allPage){
            for (var i = 1; i <= allPage; i++)
                list.push(`${url}?trang=${i}`);
        }else{
            list.push(url)
        }
        return Response.success(list);
    }
    return null;
}