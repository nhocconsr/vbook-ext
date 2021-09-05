function execute(url) {
    const idBook = url.match(/\d+$/)[0];
    const json = Http.get('https://cuutruyen.net/api/v1/mangas/'+idBook+'?sort=-translations.chapters.order&include=titles,author,translations.team,translations.chapters').string();
    var detail = JSON.parse(json).data.attributes
    var author = JSON.parse(json).included[0].attributes.name
    return Response.success({
        name: detail.name,
        cover: detail.cover_url,
        author: author,
        description: detail.description,
        detail: author+'<br>'+detail.newest_chapter_number + ' chapters',
        category: detail.newest_chapter_number,
        host: "https://cuutruyen.net"
    })
}