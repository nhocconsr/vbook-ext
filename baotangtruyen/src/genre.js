function execute() {
    const doc = Http.get("https://baotangtruyenhot.com/home").html()
    var list = doc.select('body > nav > div > div > ul > li:nth-child(4) > ul > li > div .nav li a')
    var data = []
    list.forEach(e => data.push({
        title: e.text(),
        input: e.select('a').attr('href') ,
        script: 'gen.js'
    
    }))
    return Response.success(data)
}