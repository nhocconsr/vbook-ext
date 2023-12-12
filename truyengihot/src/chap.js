load('config.js');

function execute(url) {
    url = url.replace(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/img, BASE_URL);
    if (url.indexOf("tieu-thuyet") > 0) {
        return Response.success('Hiện tại chưa hỗ trợ lấy truyện chữ. Nếu bạn biết cách lấy truyện chữ có thể inb cho mình ^^!');
    } else {
        let response = fetch(url);
        let doc = response.html();
        let el = doc.select(".contentChapter img");
        let imgs = [];
        for (let i = 0; i < el.size(); i++) {
            let e = el.get(i);
            let img = e.attr("data-src") || e.attr("src");
            if (img.indexOf('banner') >= 0 || img.indexOf('wattermark') >= 0 ) {
                // Ignore images containing 'banner' or 'watermark'
                continue;
            }
            if (img.startsWith('//')) {
                imgs.push(img.replace('//', 'https://'));
            } else if (img.startsWith('upload')) {
                imgs.push(BASE_URL + '/' + img);
            } else {
                imgs.push(img);
            }
        }
        return Response.success(imgs);
    }
}
