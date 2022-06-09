function execute(url) {
    let list = [];
    let doc = fetch(url).text();
    let sid = doc.match(/&quot;sid&quot;:(\d+)/)[1];
    let response = fetch('https://sttruyen.com/web/reading/chapters/'+sid);
    if (response.ok) {
        let data = response.json();
        let last = data.last_page
        for (var i = 1; i <= last; i++)
            list.push(url.split('/').pop()+"|https://sttruyen.com/web/reading/chapters/"+sid+"?page=" + i);

        return Response.success(list);
    }
    return null;
}