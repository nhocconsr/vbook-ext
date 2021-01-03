function execute(url) {
    const json = Http.get(url).string();
    var data = JSON.parse(json);
    var content = data.content;

    return Response.success(content['content']);
}