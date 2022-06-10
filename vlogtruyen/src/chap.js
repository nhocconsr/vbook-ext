function execute(url) {
    let response = fetch(url);
    if(response.ok){
        let doc = response.html();
        let el = doc.select(".comicDetails img");    
        let data = [];
        for (var i = 0; i < el.size(); i++) {
            var e = el.get(i);
            let img = e.attr("src");
            img.indexOf('gif') > 0 ? '' : data.push(img);   
        }
        return Response.success(data);
    }
    return null;
}