function execute(url) {
    let response = fetch(url);
    if (response.ok) {
        let doc = response.html();
        let htm = doc.select(".contentbox p").html();
        if(!htm) htm = doc.select(".contentbox .p-2").html();
        htm = htm.replace(/\n/g,'<br>')
            .replace(/<\/?i.*?>/g,'')
            .replace(/&(nbsp|amp|quot|lt|gt);/g, "")
            .replace(/(<br\s*\/?>){2,}/g, '<br>')
            .replace('(adsbygoogle = window.adsbygoogle || []).push({}); ', ''); 
        return Response.success(htm);
    }
    return null;
}
