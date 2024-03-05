function execute(url) {
    let response = fetch(url);
    if(response.ok){
        let doc = response.html()
        doc.select('.entry-content .code-block').remove()
        doc.select('.entry-content .kln').remove()
        let content = doc.select(".entry-content").html();
        content = content.replace(/<script[^>]*>.*<\/script>/gm, '')
            .replace(/\n/gm, '')
            .replace(/(<br\s*\/?>( )?){2,}/g, '<br>')
        return Response.success(content);
    }
    return null;
}