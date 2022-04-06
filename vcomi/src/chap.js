function execute(url) {
    var base_url = 'https://vcomi.co/';
    var doc = Http.get(url).html();
    var el = doc.select(".chapter-content img");
    var data = [];
    el.forEach(e => {
        Console.log(e)
        let link = e.attr("data-original").replace(/[\r\n]/g,'') || e.attr("src").replace(/[\r\n]/g,'');
        if(link.startsWith('app')){
            var img = base_url+link
        }else{
            img = link;
        }
        data.push(img)   
    });
    return Response.success(data);
}