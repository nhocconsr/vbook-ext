load('config.js');
function execute(url) {
    let response = fetch(url);
    if (response.ok){
        let doc = response.html();
        doc.select('.chapter-content div').remove();
        let content = doc.select("div.chapter-content").html();
        content = content.replace(/<!-- (.*?) -->/gm, '');
        content = content.replace(/<p(.*?)>(.*?)<?p>/g, '');
        content = content.replace(/\n/g,'<br>');
        return Response.success(content);
    }  
    return null;
}