function execute(url) {
    let response = fetch(url + '/');
    if(response.ok){
        let doc = response.text();
        const regex = /"chp_id":"(\d+)"/g;
        var chpId = regex.exec(doc)[1];
        //https://truyena.com/?chapter&data&chp_id=15593099
        const data = fetch('https://truyena.net/?chapter&data&chp_id='+chpId).json();
        var content = data['chp_content_cv'] || "Lỗi load chương hoặc site nguồn xì ke";
        var content = content.replace(/<\/?i.*?>/g, "");
        return Response.success(content);
    }
    return null;
}