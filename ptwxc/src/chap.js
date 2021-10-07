function execute(url) {
    const base = 'https://www.ptwxc.com';
    var doc = Http.get(url).html();
    var htm = doc.select(".pt-read-text").html().replace(/本章未完.*頁/g,'');
    var next_page = doc.select('.pt-nextchapter').attr('href');
    while(next_page.match('_p')){
        var doc2 = Http.get(base+next_page).html();
        htm += doc2.select(".pt-read-text").html().replace(/本章未完.*頁/g,'');
        next_page = doc2.select('.pt-nextchapter').attr('href');
    }
    return Response.success(htm);
}   

function cleanHtml(htm){
    htm.replace(/(^(<br>\s*)+|(<br>\s*)+$)/gm, '');
    htm.replace(/(<br>\s*){2,}/gm, '<br>');
    htm.replace(/<a[^>]*>([^<]+)<\/a>/g,'');
    htm.replace(/&(nbsp|amp|quot|lt|gt);/g, "");
    return htm;
}