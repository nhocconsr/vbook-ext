function execute(id, page) {
    if(!page) page = '1';
    //https://api.viptruyenfull.com/api/v1/novels/categoies/648003adef3447057449cb27?page=1&limit=10
    let response = fetch(`https://api.viptruyenfull.com/api/v1/novels/categoies/${id}?&page=${page}&limit=15`)
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