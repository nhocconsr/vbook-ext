function execute(url) {
    let bid = url.match(/\d+/);
    let response = fetch(`https://client4xcx.faloo.com/V4.1/Xml4android_novel_listPage.aspx`,{
        method : 'POST',
        body:`id=${bid}`
    })
    let $ = response.json()
    let list = []
    $.data.vols.forEach((booklet) => {
        //list.push({ name: booklet.name })
        booklet.chapters.forEach((chapter) => {
        list.push({
            name: chapter.name,
            url: `id=${bid}&n=${chapter.id}`,
            host: "https://b.faloo.com"
        })
        })
    })
    return Response.success(list);
}