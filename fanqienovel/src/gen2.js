function execute(url, page) {
    // https://api3-normal-lf.fqnovel.com/reading/bookapi/new_category/landing/v/?word_number=0&book_status=2&category_id=262&offset={page}&genre_type=0&limit=150&sort_by=24&source=front_category&query_gender=1&iid=1099935039893805&aid=1967&app_name=novelapp&version_code=287
    if (!page) page = '0';
    var json = Http.get(url).string()
    if(json){
        var data = JSON.parse(json).data
        
        var allBook2 = data.book_info
        const book = [];
        
        
        for (var i = 0; i < allBook2.length; i++) {
            var item2 = allBook2[i]        
            book.push({
                name: item2.original_book_name,
                link: "/reading/bookapi/directory/all_items/v/?need_version=true&book_id="+item2['book_id'] + "&iid=2665637677906061&aid=1967&app_name=novelapp&version_code=495",
                cover: item2['thumb_url'],
                description: item2['score'],
                host: "https://api3-normal-lf.fqnovel.com"
            })
        }
        
        var next = parseInt(page) + 15;
        return Response.success(book, next.toString())      
    }
    return Response.success(json);
}