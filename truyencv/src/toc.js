function execute(url) {
    let doc = fetch(url).html();
    const slug = url.split('/').pop();
    let lastChap = doc.select('.ekjr0xj1 a').first().attr('href').match(/chuong-(\d+)/)[1];
    let response = fetch('https://m.truyencv.vn/graphql', {
        method: "POST", // GET, POST, PUT, DELETE, PATCH
        body: JSON.stringify({
            id: "chapters_NovelRefetchQuery",
            query: "query chapters_NovelRefetchQuery(\n  $slug: String!\n  $startChapNum: Int\n) {\n  ...chapters_list_items\n}\n\nfragment chapters_list_items on Query {\n  chapterListChunks(bookSlug: $slug, chunkSize: "+lastChap+", startChapNum: $startChapNum) {\n    items {\n      title\n      chapNum\n      url\n      refId\n      id\n    }\n    title\n    startChapNum\n  }\n}\n"
,
            variables: {slug: slug, startChapNum: 1}
        })
    });
    if(response.ok){
        let json = response.json();
        let allChap = json.data.chapterListChunks[0].items;
        let list = [];
        allChap.forEach(e =>list.push({
            name: e.chapNum + ":" + e.title,
            url: e.url,
            host: "https://m.truyencv.vn"
        }));
        return Response.success(list)
    }
    return null;
}
