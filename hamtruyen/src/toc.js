function execute(url) {
    let response = fetch(url.replace('m.','www.'));
    let list = [];
    if (response.ok) {
        let doc = response.html();
        if (url.indexOf("/truyen/") > 0) {
            let sid = doc.select('#wrap_theodoi a').attr('onclick').split(/['']/)[1];
            return Response.success(fetchTruyenchu(sid));
        } else {
            let el = doc.select(".chap-item .name").select("a");
            for (let i = el.size() - 1; i >= 0; i--) {
                var e = el.get(i);
                list.push({
                    name: cap(e.text()),
                    url: e.attr("href"),
                    host: "https://hamtruyen.info"
                })
            }
            return Response.success(list);
        }
    }
    return null;
}
function cap(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function fetchTruyenchu(sid) {
    let response = fetch("https://hamtruyen.info/Webservice.asmx/getlistchuongtieuthuyet", {
        method: "POST",
        body: "{ 'sid': '" + sid + "'}"
    });
    if (response.ok) {
        let data = [];
        let ds = Html.parse(response.json().d);
        let allChap = ds.select('li a');
        for (let i = allChap.size() - 1; i >= 0; i--) {
            var e = allChap.get(i);
            data.push({
                name: cap(e.text()),
                url: e.attr("href"),
                host: "https://hamtruyen.info"
            })
        }
        return data;
    }
    return null;
}