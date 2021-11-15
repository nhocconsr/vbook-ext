function execute(url) {
    const json = Http.get(url).string()
    const data = [];
    if(JSON.parse(json).total_page === false){
        var allChap = JSON.parse(json).chapters.data;
        for (var i = 0; i < allChap.length; i++){
            var chap = allChap[i]
            data.push({
                name: chap['name'],
                url: chap['id'],
                host: "https://vip.backngocsach.com"
            })
        }
        return Response.success(data);
    }else{
        var allChap = JSON.parse(json).chapters;
        Object.keys(allChap).forEach(key => { 
            var chap = allChap[key]
            data.push({
                name: chap['name'],
                url: chap['id'],
                host: "https://vip.backngocsach.com"
            })
        })
        return Response.success(data);
    }
}