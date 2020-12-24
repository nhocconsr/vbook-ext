function execute(url) {
    var doc = Http.get(url + '/').html();
    var source = url.split('/')[4]
    var bookId = doc.select("span[id=hiddenid]").first().text().split(';')[0]
    var newUrl = 'https://sangtacviet.com/index.php?sajax=getchapterlist&bookid='+bookId+'&h='+source
    var list = [];
    var json = Http.get(newUrl.replace(/&amp;/g, "&")).string();
    var data = JSON.parse(json);
    var chapList = data["data"];
    if (chapList) {
        chapList = chapList.split("-//-")
        var start = (source == "uukanshu") ? chapList.length - 1 : 0;
        var end = (source == "uukanshu") ? -1 : chapList.length;
        var step = (source == "uukanshu") ? -1 : 1;

        for (; start != end; start += step) {
            var chap = chapList[start].split("-/-");

            var name = chap[2];
            if (name) {
                list.push({
                    name: name.replace('\n',''),
                    url: url + "/" + chap[1],
                    host: "https://sangtacviet.com"
                });
            }
        }
    }

    return Response.success(list);
}