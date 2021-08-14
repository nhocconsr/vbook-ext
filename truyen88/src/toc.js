function execute(url) {
    const doc = Http.get(url).string();
    const regex = /story_id = "(\d+)"/g;
    var storyId = regex.exec(doc)[1];
    const json = Http.get('https://api.truyen88.net/api/chapter/'+storyId+'/10000/1').string();
    var data = JSON.parse(json);
    var allChap = data.chapters;
    const list = [];
    for (var i = 0; i < allChap.length ; i++){
        var chap = allChap[i];
        list.push({
            name: chap['name'],
            url: 'https://api.truyen88.net/api/content-chapter/' + chap['id'],
            host: "https://truyen88.pro"
        })
    }

    return Response.success(list);
}