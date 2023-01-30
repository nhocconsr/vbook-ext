function execute(url) {
    let response = fetch(url.replace('m.',''));
    let list = [];
    if (response.ok) {
        let doc = response.html();
        let el = doc.select(".list-chap-story").select("a");
            for (let i = el.size() - 1; i >= 0; i--) {
                var e = el.get(i);
                list.push({
                    name: cap(e.text()),
                    url: e.attr("href"),
                    host: "https://truyensieuhay.com"
                })
            }
        return Response.success(list);
    }
    return null;
}
function cap(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
