function execute() {
    var json = Http.get('https://tienvuc.com/api/categories/all').string();
    var allCate =  JSON.parse(json);
    const data = [];
    for (var i in allCate) {
        var item = allCate[i];
        data.push({
           title: item.name,
           input: item.slug,
           script: 'cate.js'
        });
    }
    return Response.success(data);
    
}