function execute(url) {
    const doc = Http.get(url + '/').string();
    const regex = /"chp_id":"(\d+)"/g;
    var chpId = regex.exec(doc)[1];
    const json = Http.get('https://truyenwiki.net/index.php').params({
        ajax : 1,
        chp_id : chpId,
    }).string();
    var data = JSON.parse(json);

    return Response.success(data['chp_content_cv']);
}