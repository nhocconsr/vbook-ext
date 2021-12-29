function execute(url) {
    var doc = Http.get(url + '/').html();
    var source = url.split('/')[4]
    var bookId = doc.select("span[id=hiddenid]").first().text().split(';')[0]
    var newUrl = 'https://sangtacviet.xyz/index.php?sajax=getchapterlist&bookid='+bookId+'&h='+source
    var list = [];
    var json = Http.get(newUrl.replace(/&amp;/g, "&")).string();
    var data = JSON.parse(json);
    var chapList = data["data"];
    var list1 = ['biqugeinfo','biqugexs','uuxs','zwdu'];
    var list12 = ['69shuorg','xbiquge',];
    var start;
    if (chapList) {
        chapList = chapList.split("-//-")
        if (source === 'uukanshu') {
            start = chapList.length - 1
        } else if(list12.includes(source) === true){
            start = 12
        } else if(source === 'biqugese'){
            start = 10
        } else if(source === 'biqugebz'){
            start = 9
        } else if(source === '69shu'){
            start = 5
        } else if(list1.includes(source) === true){
            start = 1
        } else {
            start = 0
        }
        var end = (source === "uukanshu") ? -1 : chapList.length;
        var step = (source === "uukanshu") ? -1 : 1;
        for (; start !== end; start += step) {
            var chap = chapList[start].split("-/-");
            var name = chap[2];
            if (name) {
                list.push({
                    name: name.replace('\n','').trim().replace(/\s\s+/g, ' ' ),
                    url: url + "/" + chap[1],
                    host: "https://sangtacviet.xyz"
                });
            }
        }
    }
    return Response.success(list);
}