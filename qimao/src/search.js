load('crypto.js');
function execute(key, page) {     
    if(!page) page = '1';
    let sign = CryptoJS.MD5(`wd=${key}d3dGiJc651gSQ8w1`)
    let response = fetch(`https://api-bc.wtzw.com/api/v7/search/words?wd=${encodeURI(key)}&sign=${sign}`, {
        method: "GET", // GET, POST, PUT, DELETE, PATCH
        headers: {
            "platform": "android",
            "app-version": "71900",
            'application-id': 'com.kmxs.reader',
            'sign': `${CryptoJS.MD5("app-version=71900application-id=com.kmxs.readerplatform=androidd3dGiJc651gSQ8w1")}`,
            'user-agent': 'webviewversion/0'
        },
    })
    let data = []
    let $ = response.json()
    $.data.books.filter($ => $.show_type != 4 && $.show_type != 2).forEach(($) => {
    data.push({
        name: $.original_title,
        link: $.id,
        cover: $.image_link,
        description: $.original_author,
        host: 'https://api-bc.wtzw.com',
        })
    })
    return Response.success(data)
}



