load('config.js');
function execute(url) {
    const bookid = url.match('\\d+').shift()
    const uuid = getUuid();
    let reponse = fetch(`https://api.creative-comic.tw/book/${bookid}/chapter`, {
        method: "GET", // GET, POST, PUT, DELETE, PATCH
        headers: {
            device : device,
            uuid: uuid
        },
    });
    if (reponse.ok){
        let json = reponse.json().data;
        let allChap = json.chapters
        let list = [];
        allChap.forEach(chap => {
            let buy = chap.buy_coin > 0 === false ? true : false;
            list.push({
                name: chap.name,
                url: `https://www.creative-comic.tw/en/reader_comic/${chap.id}`,
                pay: buy,
                host: "https://www.creative-comic.tw"
            })
        });
        return Response.success(list);
    }
    return null;
}