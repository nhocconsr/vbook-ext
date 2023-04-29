function execute(url) {
    let bid = url.match(/\d+/);
    let response = fetch(`https://client4xcx.faloo.com/V4.1/Xml4Android_relevantPage.aspx`,{
        method : 'POST',
        body:`id=${bid}`
    })
    let $ = response.json()
    let book = {
        name: $.data.name,
        cover : $.data.cover,
        author : $.data.author,
        ongoing: $.data.finish == 0 ? true : false,
        category: $.data.tags.map((item)=>{ return item.name}).join(" "),
        detail: $.data.update,
        description: $.data.intro,
        host: "https://b.faloo.com"
    }
    return Response.success(book)
}