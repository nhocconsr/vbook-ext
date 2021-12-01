function execute(url) {
    let response = fetch(url);
    if (response.ok) {
        let doc = response.html();
        doc.select("#content").select('p').last().remove();
        let htm = doc.select("#content").html();
        htm = htm.replace(/<a[^>]*>([^<]+)<\/a>/g,'')
            .replace(/ ?\n/g, "<br>")
            .replace(/<\/?p>/g, "")
            .replace(/&(nbsp|amp|quot|lt|gt);/g, "");
        return Response.success(htm);
    }
    return null;
}
