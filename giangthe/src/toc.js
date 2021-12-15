function execute(url) {
    let response = fetch(url);
    if (response.ok) {
        let doc = response.html();
        const data = [];
        doc.select(".tt-chapter a").forEach(e => data.push({
            name: e.text(),
            url: e.attr('href'),
            host: "https://giangthe.com"
        }));
        return Response.success(data);
    }
    return null;
}