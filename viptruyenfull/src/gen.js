function execute(url, page) {
    if(!page) page = '1';
    let response = fetch(`https://api.viptruyenfull.com/api/v1/novels?${url}&page=${page}&limit=15`)
    if (response.ok){
        let json = response.json();
        if(json.data.paginator.next){
            var next = json.data.paginator.next.toString();
        }else {
            var next = null
        }
        let list = [];
        let allBook = json.data.list;
        allBook.forEach(book => {
            if(book.isVip === true) var vip = "【VIP】 ";
            else var vip = '';
            list.push({
                name: book.name,
                link: book.slug,
                cover: book.image,
                description: vip+book.maker,
                host: 'https://viptruyenfull.com',
            })
        });
        return Response.success(list,next)
    }
}