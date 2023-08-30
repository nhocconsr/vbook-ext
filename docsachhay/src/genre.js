function execute() {
    let doc = fetch("https://docsachhay.net").html();
    let el = doc.select("#categorylist ul li a");
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