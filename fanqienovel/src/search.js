function execute(key) {    
    let response = fetch('https://api3-normal-lf.fqnovel.com/reading/bookapi/search/tab/v/?offset=0&passback=&query='+ key +'&search_id=&iid=308323375917453&aid=1967&app_name=novelapp&version_code=504&version_name=5.0.4.32&device_platform=android', {
        headers: {
            'user-agent': UserAgent.android()
        }
    });
    if (response.ok) {
        let res_json = response.json();
        let allBook = res_json.search_tabs[0].data;
        const book = [];
        for (var i = 0; i < allBook.length; i++) {
            if(i==3){i++}
            let item = allBook[i];
            book.push({ 
                name: item.book_data[0].original_book_name,
                description: item.book_data[0].author,
                cover: item.book_data[0].thumb_url,               
                link: "https://api3-normal-lf.fqnovel.com/reading/bookapi/directory/all_items/v/?need_version=true&book_id=" +item.book_data[0].book_id + "&iid=2665637677906061&aid=1967&app_name=novelapp&version_code=495",
                host: "https://api3-normal-lf.fqnovel.com"
            })
        }
        return Response.success(book)      
    }
    return null;
}