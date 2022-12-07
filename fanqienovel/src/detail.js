function execute(url) {
    if(url.includes("fanqienovel")){
        var response = fetch(url, {
            headers: {
                'user-agent': UserAgent.android()
            }
        })
            if (response.ok) {
        let doc = response.html();
        console.log(doc.select("body"))
        return Response.success({
            name: doc.select(".info-name").first().text(),
            cover: doc.select(".page-header-img").first().attr("src").replace('//','https://'),
            author: doc.select(".info-author").first().text(),
            description: doc.select(".abstract-content-text").first().text(),
            detail: doc.select(".category-list").html()
        });
         }
    } 
    else{
        var response = fetch(url, {
            headers: {
                'user-agent': UserAgent.android()
            }
        });
    }

    if (response.ok) {
        let res_json = response.json();
        const timenew = res_json.data.book_info.last_chapter_update_time
        const milliseconds = timenew * 1000// 1575909015000
        const dateObject = new Date(milliseconds)
        const humanDateFormat = dateObject.toISOString(); //2019-12-9 10:30:15
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
            author: author ,
            description: humanDateFormat +"<br>" + description +"<br>" +"https://sangtacviet.pro/truyen/fanqie/1/"+bookid +"/",
            detail: detailinfo,
            host: "https://novel.snssdk.com",
            
        });
    }
    return null;
}