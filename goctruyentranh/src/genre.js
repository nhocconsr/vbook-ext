function execute() {
    var json = JSON.parse(Http.get('https://goctruyentranh.com/api/category').string());
    var allItem = json.result
    var data = [];
    allItem.forEach(e =>data.push({
           title: e.name,
           input: e.id,
           script: 'source.js'
        })
    )
    return Response.success(data)
}