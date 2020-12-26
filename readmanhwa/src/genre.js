function execute() {
    const json = Http.get("https://readmanhwa.com/api/tags?sort=comics_count&per_page=50").string();
    const getData = JSON.parse(json);
    var allGenre = getData.data;
    const data = [];
    for (var i = 0; i < allGenre.length; i++) {
        var e = allGenre[i];
        data.push({
           title: e['name'],
           input: 'https://readmanhwa.com/en/tag/'+e['slug'],
           script: 'cat.js'
        });
    }
    return Response.success(data);
}

