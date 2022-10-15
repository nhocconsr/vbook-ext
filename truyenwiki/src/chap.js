function execute(url) {
    let doc = fetch(url + '/').text();
    let regex = /"chp_id":"(\d+)"/g;
    let chpId = regex.exec(doc)[1];
    let response = fetch('https://truyenwiki.net/index.php', {
        method: "GET", // GET, POST, PUT, DELETE, PATCH
        queries: {
            ajax : 1,
            chp_id : chpId
        }
    });
    let data = response.json();
    let content = data.chp_content_cv
        .replace(/<(\/)?i.*?>/g, "");
    return Response.success(content);
}