function execute(url) {
    let response = fetch(url);
    if(response.ok){
        let doc = response.html();
        let mid = doc.select('input[name=manga_id]').attr('value');
        let res = fetch("https://vlogtruyen.net/thong-tin-ca-nhan?manga_id="+mid, {
            method: "GET",
            headers: {
                "x-requested-with": "XMLHttpRequest"
            }
        })
        if(res.ok){
            let allChap = Html.parse(res.json().data.chaptersHtml);
            let el = allChap.select("li a")
            let list = [];
            for (var i = el.size() - 1; i >= 0; i--) {
                var e = el.get(i);
                list.push({
                    name: e.select("h3").text(),
                    url: e.attr("href"),
                    host: "https://vlogtruyen.net"
                })
            }
            return Response.success(list);
        }
    }
    return null;
}