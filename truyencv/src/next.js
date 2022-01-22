function execute(url, page) {
    if (!page) page = null;
    let response = fetch('https://m.truyencv.vn/graphql', {
        method: "POST",
        body: JSON.stringify({
            id: "SlugGenreDetailRefetchQuery",
            query: "query SlugGenreDetailRefetchQuery(\n  $count: Int\n  $cursor: String\n  $slug: String!\n) {\n  ...SlugGenreDetail_items_2ngnRh\n}\n\nfragment SlugGenreDetail_items_2ngnRh on Query {\n  book(genreSlug: $slug, orderBy: \"-last_update\", first: $count, after: $cursor) {\n    totalCount\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n    edges {\n      node {\n        title\n        refId\n        url\n        coverSm\n        numChapters\n        bookStatus\n        lastUpdate\n        id\n        __typename\n      }\n      cursor\n    }\n  }\n}\n",
            variables: {count: 20, cursor:page, slug: url}
        })
    });
    if(response.ok){
        let json = response.json();
        let book = json.data.book;
        let allItem = book.edges;
        if(book.pageInfo.hasNextPage){
            var next = book.pageInfo.endCursor
        }else{
            var next = null
        }
        let data = [];
        allItem.forEach(e =>{
            let item = e.node;
            data.push({
                name: item.title,
                link: item.url,
                cover: item.coverSm,
                description: "Chap "+item.numChapters,
                host: "https://m.truyencv.vn"
            });
        });
        return Response.success(data,next)
    }
    return null;    
}