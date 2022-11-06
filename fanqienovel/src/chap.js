function execute(url) {
    let chapid = url.split(/[/ ]+/).pop()
    let newurl = "https://novel.snssdk.com/api/novel/book/reader/full/v1/?group_id=7130996041780593165&item_id=" + chapid + "&aid=1976"
    let response = fetch(newurl, {
        headers: {
            'user-agent': UserAgent.android()
        }
    });
    if (response.ok) {
        let res_json = response.json();
        console.log(res_json)
        let dataa = res_json.data.content;  
        var doc = Html.parse(dataa);
        var content = doc.select('article').html();
        return Response.success(content);
    }
    return null;
}