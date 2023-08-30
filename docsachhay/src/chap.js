function execute(url) {
    let response = fetch(url);
    if(response.ok){
        let doc = response.html()
        let content = doc.select("#chapter-container .box-detail").html();
        content = content.replace(/<script[^>]*>.*<\/script>/gm, '')
            .replace(/\n/gm, '')
            .replace(/<[a-z]+ style.*?>.*?<\/[a-z]+>/gm, '')
            .replace(/(<br\s*\/?>( )?){2,}/g, '<br>')
        return Response.success(content);
    }
    return null;
}