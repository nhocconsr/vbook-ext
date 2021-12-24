function execute(id, page) {
    if (!page) page = '1';
    let response = fetch('https://book.qq.com/api/book/rank',{
        method: "GET",
        queries: {
            pageNo : page,
            columnId : id,
        }
    });
    if (response.ok) {
        let json = response.json();
        let allbook = json.data.books;
        let next = parseInt(page) + 1;
        let cover;
        let novelList = [];
        allbook.forEach(book => {
            let bid = book.bid.toString().replace(/.(?=.{3})/g, '')
            if (bid < 100){
                let nid = book.bid.toString().replace(/.(?=.{2})/g, '')
                cover = 'https://wfqqreader-1252317822.image.myqcloud.com/cover/'+nid+'/'+book.bid+'/b_'+book.bid+'.jpg'
            }else{
                cover = 'https://wfqqreader-1252317822.image.myqcloud.com/cover/'+bid+'/'+book.bid+'/b_'+book.bid+'.jpg'
            }
            Console.log(bid)
            novelList.push({
                name: book.title,
                link: 'https://book.qq.com/book-detail/'+book.bid,
                cover: cover,
                description: book.author,
                host: "https://book.qq.com"
            })
        });
        return Response.success(novelList,next.toString());
    }
    return null;
}