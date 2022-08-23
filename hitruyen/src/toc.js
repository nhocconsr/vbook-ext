function execute(url) { 
    var doc = Http.get(url).html()
    var story_id = doc.select('body > div.wrap > div > div > div > div.profile-manga > div > div > div > div.tab-summary > div.summary_content_wrap > div > div.post-content > div.post-rating > input').attr('value')
    const data = [];
        var chapters = fetch("https://hitruyen.vip/wp-admin/admin-ajax.php", {
        method: "POST", 
            body: {
            "action": "manga_get_chapters",
            "manga": story_id
            }
        }).html()
        var el = chapters.select(".listing-chapters_wrap ul.main li.wp-manga-chapter a")
        el.forEach(e => data.push({
            name: e.select("a").first().text(),
            url: e.select("a").first().attr("href"),
            host: "https://hitruyen.vip"
        }));
    return Response.success(data)
}