function execute(url) {
    const bookId = url.split('/').pop().split('.')[0];
    const json = Http.get('https://api.bachngocsach.com/api/story/'+bookId).string()
    if (json){
        var detail = JSON.parse(json);
        return Response.success({
            name: detail['name'],
            cover: detail['cover'],
            author: detail['author']['name'],
            description: detail['desc'],
            detail: detail['categories'][0]['name'],
            host: "https://vip.bachngocsach.com",
        });
    }
    return null;    
}
