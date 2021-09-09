function execute(url) {
    const bookId = url.match(/\d+/)[0];
    const json = Http.get('https://webapi.gongzicp.com/novel/novelGetInfo').params({
        id:bookId
    }).string();
    var detail = JSON.parse(json).data.novelInfo
    return Response.success({
        name: detail.novel_name,
        cover: detail.novel_cover,
        author: detail.author_nickname,
        description: detail.novel_info,
        detail: detail.type_names,
        host: "https://www.gongzicp.com",
    })
}