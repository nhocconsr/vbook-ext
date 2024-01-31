load('config.js');
function execute(url) {
    url = url.replace(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/img, BASE_URL);
    let response = fetch(url);
    if (response.ok) {
        let doc = response.html();
        var imgs = [];
        doc.select("#chapter_content img[id^=image]").forEach(e => imgs.push(e.attr("src")));
        return Response.success(imgs);
    }
    return null;
}