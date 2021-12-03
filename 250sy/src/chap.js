function execute(url) {
    let id = url.match(/\d+/g);
    let response = fetch('https://www.250sy.net/t/t1.php?id=/'+id[1]+'&did='+id[2]+'&bid='+id[3]);
    if (response.ok) {
        let doc = response.html();
        doc.select('font').remove();
        let htm = doc.select('body').html();
        htm = htm.replace(/<a[^>]*>([^<]+)<\/a>/g,'')
            .replace(/ ?\n/g, "<br>")
            .replace(/(<br\s*\/?>){2,}/g, '<br>')
            .replace(/&(nbsp|amp|quot|lt|gt);/g, "");
        return Response.success(htm);
    }
    return null;
}
