function execute(url) {
    let response = fetch(url.replace('m.','www.'));
    if (response.ok) {
        let doc = response.html();
        let content = doc.select("#chaptercontent").html();
        content = content
            //.replace(/<a[^>]*>([^<]+)<\/a>/g,'')
            .replace(/\n/g,'')
            .replace(/&(nbsp|amp|quot|lt|gt);/g, "")
            .replace(/(<br\s*\/?>){2,}/g, '<br>'); 
        return Response.success(content);
    }
    return null;
}