function execute(url) {
    let doc = fetch(url + '/').html();
    let source = url.split('/')[4]
    let bookId = doc.select("span[id=hiddenid]").first().text().split(';')[0]
    let newUrl = 'https://sangtacviet.info/index.php?sajax=getchapterlist&bookid='+bookId+'&h='+source
    let list = [];
    let reponse = fetch(newUrl.replace(/&amp;/g, "&"))
    if(reponse.ok){
        let data = reponse.json();
        let chapList = data.data;
        let list1 = ['biqugeinfo','biqugexs','uuxs','zwdu'];
        let list12 = ['69shuorg','xbiquge',];
        let start;
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
            let end = (source === "uukanshu") ? -1 : chapList.length;
            let step = (source === "uukanshu") ? -1 : 1;
            for (; start !== end; start += step) {
                let chap = chapList[start].split("-/-");
                let name = chap[2];
                if (name) {
                    list.push({
                        name: name.replace('\n','').trim().replace(/\s\s+/g, ' ' ),
                        url: url + "/" + chap[1],
                        host: "https://sangtacviet.info"
                    });
                }
            }
        }
        return Response.success(list);
    }
    return null;
}