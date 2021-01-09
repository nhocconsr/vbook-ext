function execute(key){
    const json = Http.get('https://www.wuxiaworld.com/api/novels/search?query='+key+'&count=30').string()
    var data = JSON.parse(json);
    var chapList = data.items;
    const list = [];
    for (var i = 0; i < chapList.length; i++) {
        var chap = chapList[i]
        list.push({
            name: chap['name'],
            link: "novel/"+chap['slug'],
            cover: chap['coverUrl'],
            description: 'Chương '+chap['chapterCount'],
            host: "https://www.wuxiaworld.com"
        })
    }

    return Response.success(list)

}