function execute(url) {
    let slug = url.split('/').pop();
    let sid = fetch('https://api.viptruyenfull.com/api/v1/novels/'+slug).json().data.id;
    let reponse = fetch(`https://api.viptruyenfull.com/api/v1/chapters/${sid}?limit=99999`);
    if (reponse.ok){
        let json = reponse.json().data;
        let allChap = json.list.reverse()
        let list = [];
        allChap.forEach(chap => {
            let buy = chap.price > 0 === false ? true : false;
            list.push({
                name: chap.name,
                url: url+'/'+chap.chapterString,
                pay: buy,
                host: "https://viptruyenfull.com"
            })
        });
        return Response.success(list);
    }
    return null;
}