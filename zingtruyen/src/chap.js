load('config.js');
function execute(url) {
    const doc = Http.get(url).html();
    var chapter_contents = doc.select("#chapter-content").html();
    return Response.success(chapter_contents);
}