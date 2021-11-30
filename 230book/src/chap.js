function execute(url) {
    let response = fetch(url);
    if (response.ok) {
        let doc = response.html('gbk');
        let content = doc.select("#content").html();
        content = content
            //.replace(/<a[^>]*>([^<]+)<\/a>/g,'')
            .replace(/\n/g,'')
            .replace(/&(nbsp|amp|quot|lt|gt);/g, "")
            .replace(/(<br\s*\/?>){2,}/g, '<br>'); 
        return Response.success(content);
    }
    return null;
}