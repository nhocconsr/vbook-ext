function execute(url) {
    var slug = url.split('/').pop();
    var json = Http.get('https://tienvuc.com/api/reading/'+slug).string();
    var detail = JSON.parse(json)
    if(detail.status === "D") var ongoing = false;
    else var ongoing = true;
    return Response.success({
        name: detail.name,
        cover: detail.cover.domain+'/'+detail.cover.url,
        author: detail.author.name,
        description: detail.intro,
        detail: detail.updatedAt+'<br>Tác giả : '+detail.author.name,
        ongoing : ongoing,
        host: "https://tienvuc.com"
    });
}