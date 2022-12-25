load('config.js');
function execute(url) {
    url = url.replace(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/img, BASE_URL);
    let response = fetch(url);
    if(response.ok){
        let doc = response.html();
        let mid = doc.select('input[name=manga_id]').attr('value');
        let res = fetch(BASE_URL + "/thong-tin-ca-nhan?manga_id="+mid, {
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
                    host: BASE_URL
                })
            }
            return Response.success(list);
        }
    }
    return null;
}