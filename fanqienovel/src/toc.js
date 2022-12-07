function execute(url) {
    if(url.includes("api3-normal-lf.fqnovel")){
        var response = fetch(url, {
        headers: {
            'user-agent': UserAgent.android()
        }
    });
    } else {
        var bookID = url.match(/\d+/g)[0]
        console.log(bookID)
	    var response = fetch("https://api3-normal-lf.fqnovel.com/reading/bookapi/directory/all_items/v/?need_version=true&book_id="+bookID+"&iid=2665637677906061&aid=1967&app_name=novelapp&version_code=495", {
        headers: {
            'user-agent': UserAgent.android()
        }
    });
    }
    if (response.ok) {
        let res_json = response.json();
        let allBook = res_json.data.item_data_list;
        
        var book = [];
        for (let i = 0; i < allBook.length; i++) {
            let item = allBook[i];
            
            book.push({
                    name: item['title'],           
                    url: 'https://novel.snssdk.com/api/novel/book/reader/full/v1/?group_id=' + item['item_id'] + "&item_id=" + item['item_id'] + "&aid=1977",
                    host: "https://novel.snssdk.com"
        })
        }
        return Response.success(book);  
     }
    return null;
}
