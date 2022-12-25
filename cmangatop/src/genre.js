function execute() {
    const doc = fetch("https://cmangaac.com").html();
    const el = doc.select(".book_tags_content a");
    const data = [];
    el.forEach(e => data.push({
           title: e.text(),
           input: e.text(),
           script: 'source.js'
        }));
    return Response.success(data);
}