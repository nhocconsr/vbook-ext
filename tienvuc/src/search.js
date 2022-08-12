function execute(key, page) {
    if(!page) page = '1';
    let response = fetch('https://api.tienvuc.vip/search',  {
        method: "GET",
        queries: {
            search : key,
            page: page,
            limit: '10'
        }
    });
    if (response.ok){
        let data = response.json()
        let list = [];
        let allBook = data.docs;
        allBook.forEach(book => {
            if(book.vip === true) var vip = "【Truyện VIP】 ";
            else var vip = '';
            list.push({
                name: book.name,
                link: book.slug,
                cover: book.cover.domain+'/'+book.cover.url,
                description: vip+book.author.name,
                host: 'https://tienvuc.vip',
            })
        });
        return Response.success(list)
    }
}