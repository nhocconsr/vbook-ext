function execute(url) {
    var doc = Http.get(url+'/chapter-list/').html();
    var el = doc.select(".ch-list a")
    const data = [];
    if (el.length > 0){
        for (var i = el.length; i--;) {
            var e = el.get(i);
            data.push({
                name: e.text(),
                url: e.attr("href"),
                host: "https://www.mtlnovel.com"
            })
        }
        return Response.success(data);
    }else{
        return Response.success({
            name : 'This novel has no chapter at this time. Please check back again later',
            url: 'https://',
            host: "https://www.mtlnovel.com"
        });
    }
    
}