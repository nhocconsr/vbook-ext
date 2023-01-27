function execute(url) {
    let response = fetch('https://taitruyen.org/search');
    if (response.ok) {
        let doc = response.html();
        const data = [];
        doc.select('.max-h-96 a').forEach(e => data.push({
           title: e.text(),
           input: e.attr('href').match(/\d+/)[0],
           script: 'source.js'
        }));

        return Response.success(data);
    }
    return null;
}