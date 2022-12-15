function execute(id, page) {
    const base = 'https://api.mtlnation.com/media/';
    if(!page) page = '1';
    //https://api.mtlnation.com/api/v2/novels/?faloo=NaN&max_word_count=0&min_word_count=0&page=1&query=&sort=views_month
    let response = fetch('https://api.mtlnation.com/api/v2/novels/',  {
        method: "GET",
        queries: {
            page: page,
            sort: id
        }
    });
    if (response.ok){
        let data = response.json();
        if(data.meta.page.index < data.meta.page.total)
            let next = (data.meta.page.index + 1).toString()
        else next = null;
        let list = [];
        let allBook = data.data;
        allBook.forEach(book => {
            list.push({
                name: book.title,
                link: 'https://mtlnation.com/novel/'+book.slug,
                cover: base + book.cover,
                description: 'Chap ' + book.chapter_count,
                host: 'https://mtlnation.com',
            })
        });
        return Response.success(list,next.toString())
    }
    return null;
}