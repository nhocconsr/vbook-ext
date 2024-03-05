function execute(url, page) {
    if(!page) page = '1';
    //https://api.viptruyenfull.com/api/v1/chapters/lasted-chapter?page=1&limit=15
    let response = fetch(`https://api.viptruyenfull.com/api/v1/chapters/lasted-chapter?page=${page}&limit=15`)
    if (response.ok){
        let json = response.json();
        const allPage = Math.floor(json.data.paginator[0].total/10) + 1;
        if (parseInt(page) < allPage){
            var next = parseInt(page) + 1;
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
        return Response.success(list,next.toString())
    }
}