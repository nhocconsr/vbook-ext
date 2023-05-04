function execute() {
    const doc = fetch("https://baotangtruyengo.com/home").html()
    var list = doc.select('a.mb-hover-theloai')
    var data = []
    list.forEach(e => data.push({
        title: e.text(),
        input: e.select('a').attr('href').split('/').pop(),
        script: 'gen2.js'   
    }))
    return Response.success(data)
}