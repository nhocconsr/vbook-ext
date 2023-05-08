function execute() {
    let response = fetch('https://hamtruyen.info');
    if (response.ok) {
        let doc = response.html();
        const data = [];
        doc.select('#list_theloai a').forEach(e => data.push({
           title: e.text(),
           input: e.attr('href').split('=').pop(),
           script: 'source.js'
        }));

        return Response.success(data);
    }
    return null;
}