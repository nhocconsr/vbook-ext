function execute(url) {
    const base = 'https://truyengihotne.com';
    let response = fetch(url);
    if(response.ok){
        let gtext = response.text();
        var mangaID = gtext.match('mangaID = "(.+)"')[1];
        var mangaSLUG = gtext.match('mangaSLUG = "(.+)"')[1];
        var g_id = gtext.match('g_id = "(.+)"')[1];
        var cid = gtext.match('cid = "(.+)"')[1];
        var chapter = gtext.match('chapter = "(.+)"')[1];
        var token = gtext.match('_token = "(.+)"')[1];
        let gimg = fetch("https://truyengihotne.com/frontend_controllers/chapter/content.php", {
            method : "POST",
            body: {
                token: token,
                chapter_id: cid,
                m_slug: mangaSLUG,
                m_id: mangaID,
                chapter: chapter,
                g_id: g_id,
            }
        }).json().content
        let el = Html.parse(gimg).select(".page img");
        let imgs = [];
        for (let i = 0; i < el.size(); i++) {
            let e = el.get(i);
            let img = e.attr("data-echo") || e.attr("src");
            if(img.indexOf('default') <= 0){
                if(img.startsWith('/')){
                    imgs.push(base + img)
                }else if(img.startsWith('upload')){
                    imgs.push(base +'/'+ img)
                }else{
                    imgs.push(img)
                }
            }
        }
        return Response.success(imgs);
    }
    return Response.success('https://github.com/nhocconsr/vbook-ext/blob/46879e15852dad5171c65a77e3ac2950bbd58a80/huongdan/taoanhdep_cover_chuky2_18236.jpg');
}