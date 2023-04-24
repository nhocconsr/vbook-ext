load('crypto.js');
function execute(url) {
    let uid = url.match(/\d+/);
    let sign = CryptoJS.MD5(`id=${uid}d3dGiJc651gSQ8w1`)
    let response = fetch(`https://api-bc.wtzw.com/api/v5/book/detail?id=${uid}&sign=${sign}`, {
        method: "GET", // GET, POST, PUT, DELETE, PATCH
        headers: {
            "platform": "android",
            "app-version": "71900",
            'application-id': 'com.kmxs.reader',
            'sign': `${CryptoJS.MD5("app-version=71900application-id=com.kmxs.readerplatform=androidd3dGiJc651gSQ8w1")}`,
            'user-agent': 'webviewversion/0'
        },
    })
    let $ = response.json().data.book
    //return Response.success($)
    return Response.success({
        name: $.title,
        cover: $.thumb_image_link,
        author: $.author_uid,
        description: $.intro,
        detail : $.latest_chapter_title,
        ongoing: $.is_over == 0 ? true : false,
        host: "https://api-bc.wtzw.com"
    });
}