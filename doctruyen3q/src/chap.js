function execute(url) {
    load('config.js');
    url = url.replace(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/img, BASE_URL);
    let response = fetch(url, {
            headers: {
                'user-agent': UserAgent.android()
            }
    });
    if(response.ok){
        let doc = response.html()
        let el = doc.select(".page-chapter img");
        let imgs = [];
        el.forEach(e =>{
            var img = e.attr("src");
            if(img.includes('doctruyen3q')) {
                img = e.attr("data-original");
            }
            imgs.push(img)
        });
        return Response.success(imgs);
    }
    return null;
}