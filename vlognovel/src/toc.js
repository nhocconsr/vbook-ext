function execute(url) {
    let doc = fetch(url).html();
    let fchap = doc.select(".btn-move-to-chap").attr('href');
    let reponse = fetch(fchap);
    if(reponse.ok){
        let doc2 = reponse.html();
        let el = doc2.select('.list-chapter').first().select('option')
        const data = [];
        for (var i = el.size() - 1; i >= 0; i--) {
            var e = el.get(i);
            data.push({
                name: e.text(),
                url: e.attr("value"),
                host: "https://vlognovel.com"
            })
        }
        return Response.success(data);
    }

    return null;
}