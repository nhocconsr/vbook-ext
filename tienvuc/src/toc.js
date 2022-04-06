function execute(url) {
    var slug = url.split('/').pop();
    const json = Http.get('https://tienvuc.com/api/reading/'+slug+'/chapters').string();
    var allChap = JSON.parse(json).docs
    const list = [];
    allChap.forEach(chap => {
        if (chap.coins > 0) var vip = '【VIP】 ';
        else var vip = '';
        list.push({
            name: vip+chap.name,
            url: url+'/chuong-'+chap.num,
            host: "https://tienvuc.com"
        })
    });
    return Response.success(list);
}