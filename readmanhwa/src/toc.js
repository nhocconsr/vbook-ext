function execute(url) {
    var slug = url.split('/')[5];
    const json = Http.get('https://readmanhwa.com/api/comics/'+slug+'/chapters').string()
    var allChap = JSON.parse(json);
    const data = [];
    for (var i = allChap.length - 1 ;i >= 0;  i--){
        var chap = allChap[i]
        data.push({
            name: chap['name'],
            url: url + '/' + chap['slug'] + '/reader',
            host: "https://readmanhwa.com"
        })
    }
    return Response.success(data);
}