function execute(url) {
    let chapter_id  = parseInt(url.split('/').pop())
    var doc = fetch('https://manhuarock.net/ajax/image/list/chap/'+chapter_id,{
        method: 'GET',
        queries:{
            mode: 'vertical',
            quality: 'high'
        }
    }).json()
    var chooseHtml = doc.html
    var content = Html.parse(chooseHtml)
    var imgs = []
    content.select('img').forEach(e => imgs.push(e.attr("data-src")));
    return Response.success(imgs);

}