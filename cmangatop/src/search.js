load('libs.js')
function execute(key) {
    var json = Http.get('https://cmangatop.com/api/search?opt1='+key).string()
    var allItem = JSON.parse(json)
    var data = [];
    allItem.forEach(item => data.push({
            name: titleCase(item.name),
            link: item.url+'-'+item.id_book,
            cover: 'https://cmangatop.com/assets/tmp/book/avatar/'+item.avatar+'.jpg',
            description: 'Chap '+ item.last_chapter,
            host: "https://cmangatop.com"
        })
    );
    return Response.success(data)
}
