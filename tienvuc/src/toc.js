function execute(url) {
    var slug = url.split('/').pop();
    let reponse = fetch('https://tienvuc.vn/api/reading/'+slug+'/chapters');
    if (reponse.ok){
        let json = reponse.json();
        let allChap = json.docs
        let list = [];
        allChap.forEach(chap => {
            if (chap.coins > 0) var vip = '【VIP】 ';
            else var vip = '';
            list.push({
                name: vip+chap.name,
                url: url+'/chuong-'+chap.num,
                host: "https://tienvuc.vn"
            })
        });
        return Response.success(list);
    }
    return null;
}