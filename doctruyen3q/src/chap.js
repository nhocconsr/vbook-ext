function execute(url) {
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
            let img = e.attr("src");
            if(!img.includes('doctruyen3qme.com')) imgs.push(img)
        });
        return Response.success(imgs);
    }
    return null;
}