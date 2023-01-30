function execute(url, page) {
    if(!page) page = '0';
    let response = fetch('https://goctruyentranhvui.com/api/comic/search/'+url,{
        method : "GET",
        queries : {
            p : page
        }
    });
    if(response.ok){
        let json = response.json();
        let allItem = json.result.data;
        if(json.result.next === true) let next = (parseInt(page) + 1).toString();
        else next = null;
        if(allItem){
            let data = [];
            allItem.forEach(item => data.push({
                name: item.name,
                link: 'https://goctruyentranhvui.com/truyen/'+item.nameEn,
                cover: item.photo,
                description: 'Chap '+item.chapterLatest[0],
                host: "https://goctruyentranhvui.com"
            }))
            return Response.success(data,next)
        }
    }
    return null;
}