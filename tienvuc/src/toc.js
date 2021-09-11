function execute(url) {
    var slug = url.split('/').pop();
    const json = Http.get('https://tienvuc.com/api/reading/'+slug+'/chapters').string();
    var allChap = JSON.parse(json).docs
    const list = [];
    for (var i in allChap) {
        var chap = allChap[i];
        if (chap.coins > 0) var vip = '【VIP】 ';
        else var vip = '';
        list.push({
            name: vip+chap.name,
            url: 'https://tienvuc.com/api/reading/'+slug+'/chapters/'+chap.num+'/content',
            host: "https://tienvuc.com"
        })
    }
    return Response.success(list);
}