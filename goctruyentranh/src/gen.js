function execute(url, page) {
    if(!page) page = '0';
    var json = JSON.parse(Http.get('https://goctruyentranh.com/api/comic/search/'+url).params({p : page}).string());
    var allItem = json.result.data
    if(json.result.next === true) var next = (parseInt(page) + 1).toString()
    else var next = null;
    if(allItem){
        var data = [];
        allItem.forEach(item => data.push({
            name: item.name,
            link: 'https://goctruyentranh.com/truyen/'+item.nameEn,
            cover: item.photo,
            description: 'Chap '+item.chapterLatest[0],
            host: "https://goctruyentranh.com"
        }))
        
        return Response.success(data,next)
    }
    return null;
}