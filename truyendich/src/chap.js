function execute(url){
    const chap = url.split('/')[5];
    const name = url.split('/')[4];
    const json = Http.get('https://truyendich.org/secure/chapters/'+name+'/'+chap).string()
    var content = JSON.parse(json);
    var data = content.chapter['content'];

    return Response.success(data);
}