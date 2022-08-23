function execute() {
    const doc = Http.get("https://yocomic.com/").html()
    var list = doc.select('.sub-nav_content ul li a')
    var data = []
    list.forEach(e => data.push({
        title: e.text(),
        input: "https://yocomic.com" + e.select('a').attr('href') ,
        script: 'gen.js'
    
    }))
    return Response.success(data)
}