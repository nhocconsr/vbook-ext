function execute(url){
    const chapId = url.match(/\d+/)[0];
    const json = Http.get('https://api.bachngocsach.com/api/chapter/'+chapId).string()
    var content = JSON.parse(json);
    var data = content.chapter.content.replace(/\n/gi, "<br>") ;
    return Response.success(data);
}