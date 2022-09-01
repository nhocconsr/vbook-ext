function execute() {
    const doc = Http.get("https://hitruyen.vip").html()
    var list = doc.select('.sub-nav_list  li a')
    var data = []
    list.forEach(e => data.push({
        title: e.text(),
        input: e.select('a').attr('href') ,
        script: 'gen.js'
    
    }))
    return Response.success(data)
}