function execute(url) {
    const doc = Http.get(url + '/').string();
    const regex = /"chp_id":"(\d+)"/g;
    var chpId = regex.exec(doc)[1];
    //https://truyena.com/?chapter&data&chp_id=15593099
    const json = Http.get('https://truyena.com/?chapter&data&chp_id='+chpId).string();
    var data = JSON.parse(json);
    var content = data['chp_content_cv'] || "Lỗi load chương hoặc site nguồn xì ke";
    var content = content.replace(/<\/?i.*?>/g, "");
    return Response.success(content);
}