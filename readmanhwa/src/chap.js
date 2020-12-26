function execute(url){
    const chap = url.split('/')[6];
    const name = url.split('/')[5];
    const json = Http.get('https://readmanhwa.com/api/comics/'+name+'/'+chap+'/images').string()
    var content = JSON.parse(json);

    var allImage = content.images;
    const data = [];
    for (var i =0 ; i < allImage.length ; i++){
        var e = allImage[i];
        data.push(e['source_url']);
    }
    return Response.success(data);
}