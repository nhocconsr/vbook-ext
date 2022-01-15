load('crypto.js');
load('libs.js');
function execute(url, page) {
    if (!page) page = '1';
    let response = fetch('https://cmangaka.com/api/list_item', {
        method: "GET",
        queries: {
            page : page,
            limit : '40',
            sort : 'new',
            type : 'all',
            tag : url,
            child : 'on',
            status : 'all',
            num_chapter : '0'
        }
    });
    if (response.ok) {
        let doc = response.text();
        let data = JSON.parse(decrypt_data(doc));
        let allPage = Math.floor(data['total']/40);
        const next = (page < allPage) ? (parseInt(page) + 1).toString() : null;
        let list = [];
        for(let i = 0; i < 40; i++){
            let item = data[i];
            list.push({
                name: titleCase(item.name),
                link: item.url+'-'+item.id_book,
                cover: 'https://cmangaka.com/assets/tmp/book/avatar/'+item.avatar+'.jpg',
                description: 'Chap '+ item.last_chapter,
                host: "https://cmangaka.com"
            })
        }
        return Response.success(list,next)
    }
    return null;
}