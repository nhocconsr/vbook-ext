function execute(url) {
    let bid = url.match(/\d+/)[0];
    let response = fetch('https://book.qq.com/api/book/detail/chapters', {
        method: "GET",
        queries: {
            bid : bid,
        }
    });
    if (response.ok) {
        let json = response.json().data;
        let novelList = [];
        json.forEach(e => {
            if(e.free != 0) let stt = '【Free】 ';
            else stt = '【VIP】 ';
            novelList.push({
                name: stt + e.chapterName,
                url: url+'/'+e.cid,
                host: "http://book.qq.com"
            })
        });
        return Response.success(novelList);
    }
    return null;
}