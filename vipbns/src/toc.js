load("config.js");

function execute(url) {
    let bookUrl = url.substring(0, url.indexOf(".html"));
    let tocUrl = BASE_URL + url.substring(url.indexOf(".html") + 5, url.length);
    let response = fetch(tocUrl);
    if (response.ok) {
        let chapters = [];
        response.json().chapters.data.forEach(item => {
            chapters.push({
                name: item.name,
                url: bookUrl + '/' + item.slug + '/' + item.id + '.html',
                pay: item.price > 0,
            });
        });
        return Response.success(chapters);
    }
    return null;

}