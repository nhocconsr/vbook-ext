function execute(url) {
    let mid = url.split('-').pop().split('.').shift();
    const options = {
        method: 'GET',
        headers: {
            'x-requested-with': 'XMLHttpRequest'
        }
    };
    let response = fetch('https://thienhatruyen.com/thong-tin-ca-nhan?manga_id='+mid, options);
    if (response.ok){
        var doc = Html.parse(response.json().data.chaptersHtml);
        var el = doc.select("li a")
        const data = [];
        for (var i = el.size() - 1; i >= 0; i--) {
            var e = el.get(i);
            data.push({
                name: e.select(".titleComic").text(),
                url: e.attr("href"),
                host: "https://thienhatruyen.com"
            })
        }
        return Response.success(data);
    }
    return Response.error('message') // Trả về response thất bại với nội dung lỗi
}