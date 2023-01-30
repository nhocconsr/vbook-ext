function execute(url) {
    let mid = url.split('/').pop();
    let response = fetch('https://hentaibackend.vercel.app/api/v1/mangas/'+mid+'/chapters?fields=_id,serialNumber&sort=serialNumber&limit=999999');
    if (response.ok){
        let list_chap = [];
        let allChap = response.json().chapters
        Object.keys(allChap).forEach(key => { 
            var chap = allChap[key]
            list_chap.push({
                name: 'Chap '+chap.serialNumber,
                url: url+'/chapter/'+chap._id,
                host: "https://www.hentaidexy.net"
            })
        })
        return Response.success(list_chap);
    }
}