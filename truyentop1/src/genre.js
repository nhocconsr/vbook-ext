function execute() {
    function capitalize(s){
        return s[0].toUpperCase() + s.slice(1);
    }
    const doc = Http.get("http://truyentop1.com").html();
    const el = doc.select("#list_theloai a");
    const data = [];
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        data.push({
           title: capitalize(e.text()),
           input: e.attr('href'),
           script: 'cat.js'
        });
    }
    return Response.success(data);
}