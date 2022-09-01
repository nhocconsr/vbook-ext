function execute() {
    const doc = Http.get("https://baotangtruyenhot.com/home").html()
    var list = doc.select('.dropdown-menu .tr-full-truyen2 a')
    var data = []
    list.forEach(e => data.push({
        title: e.text(),
        input: e.select('a').attr('href') ,
        script: 'gen.js'
    
    }))
    return Response.success(data)
}