load('crypto.js');
load('libs.js');
function execute(url, page) {
    if(!page) page = '1';
    var doc = Http.get('https://cmangatop.com/api/list_item').params({
        page : page,
        limit : '40',
        sort : url,
        type : 'all',
        child : 'on',
        status : 'all',
        num_chapter : '0'
    }).string();
    var data = JSON.parse(decrypt_data(doc));
    var allPage = Math.floor(data['total']/40);
    const next = (page < allPage) ? (parseInt(page) + 1).toString() : null;
    var list = [];
    for(var i = 0; i < 40; i++){
        var item = data[i];
        list.push({
            name: titleCase(item.name),
            link: item.url+'-'+item.id_book,
            cover: 'https://cmangatop.com/assets/tmp/book/avatar/'+item.avatar+'.jpg',
            description: 'Chap '+ item.last_chapter,
            host: "https://cmangatop.com"
        })
    }
    return Response.success(list,next)
}
