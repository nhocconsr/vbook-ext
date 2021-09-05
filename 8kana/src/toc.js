function execute(url) {
    const idBook = url.match(/\d+/)[0];
    var json = Http.get('https://jpmtl.com/v2/chapter/'+idBook+'/list?state=published&structured=true&direction=false').string();
    var data = JSON.parse(json)
    const list = [];
    for (var x in data){
        var vol = data[x].chapters
        for (var y in vol){
            var chapter = vol[y]
            list.push({
                name: chapter.title,
                url: chapter.id,
                host: "https://jpmtl.com"
            })
        }
    }
    return Response.success(list);
}