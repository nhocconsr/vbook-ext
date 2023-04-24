function execute(url, page) {
    const uPic = 'https://p3-tt.byteimg.com/img/';
    if (!page) page = '0';
    var json = Http.get('https://reading.snssdk.com/reading/bookapi/bookmall/cell/change/v/?change_type=0&cell_id=6830619432276983815&offset=20&plan_id=0&related_book_id=0&tab_type=6&genre=0&sub_genre=0&tag_id=0&sub_tag_id=0&cell_sub_id=0&category_id=0&pad_column_detail=0&limit=10&pad_column_cover=0&iid=3791554206774573&device_id=4133784945704270&ac=wifi&channel=reading_yunying_PC1&aid=1967&app_name=novelapp&version_code=507&version_name=5.0.7.32&device_platform=android&os=android&ssmix=a&device_type=SM-G973N&device_brand=samsung&language=vi&os_api=25&os_version=7.1.2&manifest_version_code=507&resolution=900*1600&dpi=320&update_version_code=50732&_rticket=1633688934593&vip_state=0&pv_player=5051600&is_android_pad_screen=0&compliance_status=0&gender=1&ab_sdk_version=3153691%2C90000563&rom_version=d2que-user+7.1.2+QP1A.190711.020+700210731+release-keys&host_abi=armeabi-v7a&cdid=2bc05185-0e0c-4215-965d-3b6b2805d915')
        // .params({
        //     page_count : '18',
        //     page_index : page,
        //     sort : url
        // })
        .string();
    if(json){
        var data = JSON.parse(json).data
        var allBook = data.cell_view.book_data
        const book = [];
        for (var i = 0; i < allBook.length; i++) {
            var item = allBook[i]
            book.push({
                name: item.book_name,
                link: "https://fanqienovel.com/" + 'page/'+item['book_id'],
                cover: uPic+item['thumb_url']+'~180x234.jpg',
                description: item['author'],
                host: "https://fanqienovel.com"
            })
        }
        if (data.has_more == 1){
            var next = parseInt(page) + 1;
        }
        return Response.success(book, next.toString())      
    }
    return Response.success(json);
}