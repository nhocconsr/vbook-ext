function execute(key, page) {
    if(!page) page = '0';
    var json = JSON.parse(Http.get('https://goctruyentranh.com/api/comic/search/').params({name : key}).string());
    var allItem = json.result
    if(allItem){
        var data = [];
        allItem.forEach(item => data.push({
            name: item.name,
            link: 'https://goctruyentranh.com/truyen/'+item.nameEn,
            cover: item.photo,
            description: 'Chap '+item.chapterLatest[0],
            host: "https://goctruyentranh.com"
        }))       
        return Response.success(data)
    }
    return null;
}