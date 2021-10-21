function execute(key, page) {
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    if (!page) page = '1';
    const doc = Http.get('https://truyen3s.com/search/'+key+'/'+page).html()
	var next = doc.select('.pagination-control').select('li.active + li').text();
    const el = doc.select(".storylist .story")
    const data = [];
    el.forEach(e =>data.push({
            name: e.select("h2 a").first().text(),
            link: e.select("h2 a").first().attr("href"),
            cover: e.select("img").first().attr("src"),
            description: capitalizeFirstLetter(e.select(".content-story a[href~=author]").first().text()),
            host: "https://truyen3s.com"
        })
    )
    return Response.success(data, next)
}