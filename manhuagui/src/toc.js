load('lzstring.js');
function execute(url) {
    let nUrl = url.replace('m.','www.')
    let response = fetch(nUrl);
    if(response.ok){
        let doc = response.html();
        
        var crypt = doc.select("input[id=__VIEWSTATE]").attr('value');
        if(crypt){
            var dec = Html.parse(LZString.decompressFromBase64(crypt));
            var el = dec.select(".chapter-list a");
        }else{
            var el = doc.select(".chapter-list a");
        }
        let data = [];
        for (var i = el.size() - 1; i >= 0; i--) {
            var e = el.get(i);
            data.push({
                name: e.attr("title"),
                url: e.attr("href"),
                host: "https://www.manhuagui.com"
            })
        }
        return Response.success(data);
    }
    return null;
}