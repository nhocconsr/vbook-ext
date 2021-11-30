function execute(url) {
    let response = fetch(url);
    if (response.ok) {
        let doc = response.html();
        let content = doc.select(".content").html();
        content = content
            .replace(/\n/gi, "<br>")
            .replace(/(<br\s*\/?>){2,}/g, '<br>'); 
        return Response.success(content);
    }
    return null;
}