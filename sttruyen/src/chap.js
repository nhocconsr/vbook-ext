load('base64.js');
function execute(url) {
    let doc = fetch(url).html();
    let cid = doc.select('reading-component').attr('chapter_id');
    let response = fetch('https://sttruyen.com/web/reading/chapter/'+cid)
    if(response.ok){
        let data = response.json();
        let encrypted = data.chapter.content;
        return Response.success(Base64.decode(encrypted));
    }
    return null;
}