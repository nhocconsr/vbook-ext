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
            let array = res_json.data.item_list;
            var allBook = [];
            // 2048 characters
            let chunkSize = 80
            for (let i = 0; i < array.length; i += chunkSize) {
                let chunk = array.slice(i, i + chunkSize).join(",");
                allBook.push(chunk);
            }
            return Response.success(allBook);
        }
        return null;
}