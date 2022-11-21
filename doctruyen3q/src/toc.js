function execute(url) {
    let repsonse = fetch(url, {
            headers: {
                'user-agent': UserAgent.android()
            }
    });
    if(repsonse.ok){
        let doc = repsonse.html();
        let el = doc.select(".list-chapter .chapter")
        let data = [];
        for (let i = el.length; i--;) {
            let e = el.get(i);
            data.push({
                name: e.text(),
                url: e.attr("href"),
                host: "https://doctruyen3qme.com/"
            })
        }
        return Response.success(data);
    }
    return null;
}