function execute(url) {
    let cvData ="";
    let part1 = url.replace("https://k.2kxs.org", "").replace(".html","");
    var next = part1;
    while (next.includes(part1)) {
        let response = fetch("https://k.2kxs.org" + next +".html");
        if (response.ok) {
            let doc = response.html();
            next = doc.select(".next a").attr("href").replace(".html","");
            let htm = doc.select(".row .content-ext").html();
            cvData = cvData + htm;
        } else {
            break;
        }
    }
    if (cvData) {
        return Response.success(cvData.replace(/&nbsp;/g,'').replace(/第(.*?)章(.*?)\(第\d\/\d页\)/g,'').replace('（本章未完，请点击下一页继续阅读）',''));
    }
    return null;
}