function execute() {
    let doc = fetch("https://sttruyen.com").html();
    let el = doc.select('.modal-content a');
    let data = [];
    for (var i = 0; i < el.size() - 8; i++) {
        var e = el.get(i);
        data.push({
           title: e.select('a').text().replace('Truyện ',''),
           input: "https://sttruyen.com/"+e.attr('href'),
           script: 'gen.js'
        });
    }
    return Response.success(data);
}