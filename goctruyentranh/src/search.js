function execute(key, page) {
    if(!page) page = '0';
    let response = fetch('https://goctruyentranhvui.com/api/comic/search/',{
        method : "GET",
        queries : {
            name : key
        }
    });
    if(response.ok){
        let json = response.json();
        let allItem = json.result;
        if(allItem){
            let data = [];
            allItem.forEach(item => data.push({
                name: item.name,
                link: 'https://goctruyentranhvui.com/truyen/'+item.nameEn,
                cover: item.photo,
                description: 'Chap '+item.chapterLatest[0],
                host: "https://goctruyentranhvui.com"
            }))
            return Response.success(data)
        }
    }
    return null;
}