function execute() {
    let doc = fetch("https://truyenconvert.net").html();
    let el = doc.select(".sidebar-content a[href~=the-loai]");
    const data = [];
    el.forEach(e => {
        data.push({
            title: e.text(),
            input: e.attr('href').split('/').pop(),
            script: 'gen.js'
        })
    });
    return Response.success(data);
}