function execute(url) {
    let slug = url.split('/').pop();
    //https://api.viptruyenfull.com/api/v1/novels/dai-thanh-truyen-ban-dich
    let reponse = fetch('https://api.viptruyenfull.com/api/v1/novels/'+slug);
    if (reponse.ok){
        let detail = reponse.json().data;
        if(detail.isFull === true) var ongoing = false;
        else var ongoing = true;
        return Response.success({
            name: detail.name,
            cover: detail.image,
            author: detail.maker,
            description: detail.description,
            detail: detail.updatedAt+'<br>Tác giả : '+detail.maker,
            ongoing : ongoing,
            host: "https://viptruyenfull.com"
        });
    }
    return null;
}