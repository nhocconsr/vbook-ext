function execute(url) {
    var bookid = url.replace(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/img, "").match(/\d+/g)[0]
    let newurl = "https://api5-normal-lf.fqnovel.com/reading/bookapi/detail/v/?book_id="+bookid+"&iid=2159861899465991&aid=1967&version_code=311&update_version_code=31132"
    let response = fetch(newurl, {
        headers: {
            'user-agent': UserAgent.android()
        }
    });
    if (response.ok) {
        let res_json = response.json();
        const last_chapter_update_time = res_json.data.last_chapter_update_time
        const last_chapter_update_time_string = new Date(last_chapter_update_time * 1000).toLocaleDateString("vi-VN", {
            day: "2-digit",
            month: "2-digit",
            year: "2-digit"
        });
        console.log(last_chapter_update_time_string)
        let authorInfo = res_json.data.original_authors;
        let detailinfo = res_json.data.sub_info;
        let author = JSON.parse(authorInfo)[0].AuthorName;
        let bookname = res_json.data.original_book_name;
        let bookid = res_json.data.book_id;
        let description = res_json.data.abstract.replace(/\n/g, "<br>");
        let coverImg = res_json.data.thumb_uri;
        coverImg = "http://p3-novel.byteimg.com/origin/" + coverImg + ".png";
        return Response.success({
            name: bookname,
            cover: coverImg,
            author: author,
            description: description,
            detail: "作者： " + author + "<br/>" + detailinfo + "<br/>" + last_chapter_update_time_string,
        });

    }
    return null;
}