function execute(url) {
    var doc = Http.get(url + '/').html();
    var source = url.split('/')[4]
    var bookId = doc.select("span[id=hiddenid]").first().text().split(';')[0]
    var newUrl = 'http://sangtacviet.com/index.php?sajax=getchapterlist&bookid='+bookId+'&h='+source
    var list = [];
    var json = Http.get(newUrl.replace(/&amp;/g, "&")).string();
    var data = JSON.parse(json);
    var chapList = data["data"];
    if (chapList) {
        chapList = chapList.split("-//-")
        if (source == 'uukanshu') {
            var start = chapList.length - 1
        } else if(source == '69shuorg' || source == 'xbiquge'){
            var start = 12
        } else if(source == 'biqugese'){
            var start = 10
        } else if(source == '69shu'){
            var start = 5
        } else if(source == '230book' || source == 'biqugeinfo' || source == 'biqubu'){
            var start = 1
        } else {
            var start = 0
        }
        var end = (source == "uukanshu") ? -1 : chapList.length;
        var step = (source == "uukanshu") ? -1 : 1;

        for (; start != end; start += step) {
            var chap = chapList[start].split("-/-");

            var name = chap[2];
            if (name) {
                list.push({
                    name: name.replace('\n',''),
                    url: url + "/" + chap[1],
                    host: "http://sangtacviet.com"
                });
            }
        }
    }

    return Response.success(list);
}