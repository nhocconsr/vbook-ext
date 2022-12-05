function execute(url) {
    let response = fetch(url, {
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