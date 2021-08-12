function execute(url){
    const chapId = url.split('/').pop().split('.')[0];
    const json = Http.get('https://api.bachngocsach.com/api/chapter/'+chapId).string()
    var content = JSON.parse(json);
    var data = content['content'];
    var data = data.replace(/\n/gi, "<br>") ;

    return Response.success(data);
}