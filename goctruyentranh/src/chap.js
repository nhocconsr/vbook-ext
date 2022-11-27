function execute(url) {
    const response = fetch(url);
    if(response.ok){
        let doc = response.html();
        let check_lock = doc.select('#wrap_alertvip').text().indexOf("Chương này đã bị khóa") != -1;
        let data = [];
        if (check_lock === true){
            data.push('https://goctruyentranhhay.org/image/banner/1MP6UdYiZZYDE4AEDsbnoFJKrbnkghsWN')
        }else{
            var el = doc.select(".view-section .viewer img");
            el.forEach ( e => {
                data.push(e.attr("src"));
            })
        }
        return Response.success(data);
    }
    return null;
}