load('crypto.js');
function execute(url) {
    let uid = url.match(/\d+/);
    let sign = CryptoJS.MD5(`id=${uid}d3dGiJc651gSQ8w1`)
    let response = fetch(`https://api-ks.wtzw.com/api/v1/chapter/chapter-list?id=${uid}&sign=${sign}`, {
        method: "GET", // GET, POST, PUT, DELETE, PATCH
        headers: {
            "platform": "android",
            "app-version": "71900",
            'application-id': 'com.kmxs.reader',
            'sign': `${CryptoJS.MD5("app-version=71900application-id=com.kmxs.readerplatform=androidd3dGiJc651gSQ8w1")}`,
            'user-agent': 'webviewversion/0'
        },
    })
    let $ = response.json()
    let list = []
    $.data.chapter_lists.forEach((chapter) => {
    list.push({
        name: chapter.title,
        url: `chapterId=${chapter.id}&id=${uid}`,
        host: "https://api-bc.wtzw.com"
        })
    })
    return Response.success(list)
}