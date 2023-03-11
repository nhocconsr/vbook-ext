function execute(url) {
    let newurl = `https://api5-normal-lf.fqnovel.com/reading/bookapi/directory/all_infos/v/?item_ids=${url}&iid=2159861899465991&aid=1967&version_code=311&update_version_code=31132`
    let response = fetch(newurl, {
        headers: {
            'user-agent': UserAgent.android()
        }
    });
    if (response.ok) {
        let res_json = response.json();
        let item = res_json.data;
        const book = [];
        for (let i = 0; i < item.length; i++) {
            book.push({
                name: item[i].title,
                url: 'https://novel.snssdk.com/api/novel/book/reader/full/v1/?group_id=' + item[i].item_id + "&item_id=" + item[i].item_id + "&aid=1977",
                host: "https://novel.snssdk.com"
            })
        }
        return Response.success(book);
    }
    return null;

}
