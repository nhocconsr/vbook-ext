function execute(url) {
    const base = 'https://truyengihay.net'
    let doc = fetch(url).html();
    let el = doc.select(".pageWrapper img");
    let imgs = [];
    for (let i = 0; i < el.size(); i++) {
        let e = el.get(i);
        let img = e.attr("data-echo") || e.attr("src");
        if(img.indexOf('donate') <= 0){
            if(img.startsWith('/')){
                imgs.push(base + img)
            }else if(img.startsWith('upload')){
                imgs.push(base +'/'+ img)
            }else{
                imgs.push(img)
            }
        }
    }
    return Response.success(imgs);
}