function execute(url) {
    const base = 'https://vip.bachngocsach.com/dich/'
    const nurl = url.split('|');
    const json = Http.get(nurl[0]).string()
    const data = [];
    if(JSON.parse(json).total_page === false){
        var allChap = JSON.parse(json).chapters.data;
        for (var i = 0; i < allChap.length; i++){
            var chap = allChap[i]
            data.push({
                name: chap.name,
                url: base+nurl[1]+'/'+chap.story_id+'/'+chap.slug+'/'+chap.id+'.html',
                host: "https://vip.bachngocsach.com"
            })
        }
        return Response.success(data);
    }else{
        var allChap = JSON.parse(json).chapters;
        Object.keys(allChap).forEach(key => { 
            var chap = allChap[key]
            data.push({
                name: chap.name,
                url: base+nurl[1]+'/'+chap.story_id+'/'+chap.slug+'/'+chap.id+'.html',
                host: "https://vip.bachngocsach.com"
            })
        })
        return Response.success(data);
    }
}