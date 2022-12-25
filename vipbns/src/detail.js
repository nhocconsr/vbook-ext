function execute(url) {
    const bookId = url.split('/').pop().split('.')[0];
    const json = Http.get('https://api.bachngocsach.vip/api/story/'+bookId).string()
    if (json){
        var detail = JSON.parse(json);
        if (detail.status === 0) var ongoing = true
        else var ongoing = false
        return Response.success({
            name: detail['name'],
            cover: detail['cover'],
            author: detail['author']['name'],
            description: detail['desc'],
            detail: detail['categories'][0]['name'],
            ongoing : ongoing,
            host: "https://bachngocsach.vip",
        });
    }
    return Response.success(JSON.parse(json));    
}
