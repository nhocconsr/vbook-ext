function execute(id, page) {
    const base = 'https://api.mtlnation.com/media/';
    if(!page) page = '1';
    let response = fetch('https://api.mtlnation.com/api/v2/novels/',  {
        method: "GET",
        queries: {
            page: page,
            include_tags: id,
            sort: 'novel_new',
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
        return Response.success(list,next)
    }
    return null;
}