load('config.js');
function execute(url, page) {
    let uuid = getUuid();
    if(!page) page = '1';
    let response = fetch(`https://api.creative-comic.tw/book?page=${page}&rows_per_page=24&sort_by=${url}&class=2`, {
        method: "GET", // GET, POST, PUT, DELETE, PATCH
        headers: {
            device : device,
            uuid: uuid
        },
    })
    if (response.ok){
        let json = response.json();
        let allpage = json.data.total/24
        if(page < allpage){
            var next = (parseInt(page) + 1).toString();
        }else {
            var next = null
        }
        let list = [];
        let allBook = json.data.data;
        allBook.forEach(book => {
            let l = `https://www.creative-comic.tw/en/book/${book.id}/content`
            list.push({
                name: book.name,
                link: l,
                cover: book.image1,
                description: book.user_name,
                host: 'https://api.creative-comic.tw',
            })
        });
        return Response.success(list,next)
    }
    return null;
}