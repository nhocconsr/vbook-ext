function execute(url) {
    let response = fetch(url);
    if(response.ok){
        let doc = response.html()
        let el = doc.select(".page-chapter img");
        let imgs = [];
        el.forEach(e =>{
            let img = e.attr("src");
            if(!img.endsWith('doctruyen3qz.jpg')) imgs.push(img)
        });
        return Response.success(imgs);
    }
    return null;
}