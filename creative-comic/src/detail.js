load('config.js');
function execute(url) {
    const bookid = url.match('\\d+').shift()
    const uuid = getUuid();
    let reponse = fetch(`https://api.creative-comic.tw/book/${bookid}/info`, {
        method: "GET", // GET, POST, PUT, DELETE, PATCH
        headers: {
            device : device,
            uuid: uuid
        },
    });
    if (reponse.ok){
        let detail = reponse.json().data;
        if(detail.isFull === true) var ongoing = false;
        else var ongoing = true;
        return Response.success({
            name: detail.name,
            cover: detail.image,
            author: detail.author[0].name,
            description: detail.description,
            detail: detail.updated_at+'<br>Tác giả : '+detail.author[0].name,
            ongoing : ongoing,
            host: "https://www.creative-comic.tw"
        });
    }
    return null;
}