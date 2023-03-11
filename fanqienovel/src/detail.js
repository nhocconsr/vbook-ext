function execute(url) {
    if (url.includes("fanqienovel")) {
        var bookid = url.match(/\d+/g)[0]
    }
    if (url.includes("fqnovel")) {
        bookid = url.match(/\d+/g)[1]
    }
    let newurl = "https://api3-normal-lf.fqnovel.com/reading/bookapi/directory/all_items/v/?need_version=true&book_id=" + bookid + "&iid=2159861899465991&aid=1967&app_name=novelapp&version_code=311"
    let response = fetch(newurl, {
        headers: {
            'user-agent': UserAgent.android()
        }
    });
    if (response.ok) {
        let res_json = response.json();
        const last_chapter_update_time = res_json.data.book_info.last_chapter_update_time
        const last_chapter_update_time_string = new Date(last_chapter_update_time * 1000).toLocaleDateString("vi-VN", {
            day: "2-digit",
            month: "2-digit",
            year: "2-digit"
        });
        let authorInfo = res_json.data.book_info.original_authors;
        let detailinfo = res_json.data.book_info.sub_info;
        let author = JSON.parse(authorInfo)[0].AuthorName;
        let bookname = res_json.data.book_info.original_book_name;
        let bookid = res_json.data.book_info.book_id;
        let description = res_json.data.book_info.abstract.replace(/\n/g, "<br>");
        let coverImg = res_json.data.book_info.thumb_uri;
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