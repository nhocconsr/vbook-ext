function execute(url) {
    const json = Http.get(url).string()
    if (json){
        var book = JSON.parse(json);
        var allChap = book.data;
        const data = [];
        for (var i = 0; i < allChap.length; i++){
            var chap = allChap[i]
            data.push({
                name: chap['name'],
                url: chap['id'],
                host: "https://vip.backngocsach.com"
            })
        }
        return Response.success(data);
    }
    return Response.success(json)
}