function execute() {
    return Response.success([
        //{ title: "最新", input: "1", script: "gen3.js" },
        //{ title: "最热", input: "0", script: "gen3.js" },
    {"title":"都市脑洞", input: "https://api3-normal-lf.fqnovel.com/reading/bookapi/new_category/landing/v/?word_number=0&book_status=2&category_id=262&offset={page}&genre_type=0&limit=150&sort_by=24&source=front_category&query_gender=1&iid=1099935039893805&aid=1967&app_name=novelapp&version_code=287", script: "gen2.js" },
    {"title":"玄幻脑洞", input: "https://api3-normal-lf.fqnovel.com/reading/bookapi/new_category/landing/v/?word_number=0&book_status=2&category_id=257&offset={page}&genre_type=0&limit=150&sort_by=24&source=front_category&query_gender=1&iid=1099935039893805&aid=1967&app_name=novelapp&version_code=287", script: "gen2.js" },
 {"title":"科幻", input: "https://api3-normal-lf.fqnovel.com/reading/bookapi/new_category/landing/v/?word_number=0&book_status=2&category_id=8&offset={page}&genre_type=0&limit=150&sort_by=24&source=front_category&query_gender=1&iid=1099935039893805&aid=1967&app_name=novelapp&version_code=287", script: "gen2.js" },
        { title: "都市榜", input: "1", script: "rank.js" },
        { title: "玄幻榜", input: "7", script: "rank.js" },
        { title: "小众榜", input: "-1", script: "rank.js" },
        { title: "现言榜", input: "3", script: "rank.js" },
        { title: "古言榜", input: "5", script: "rank.js" }
    ]);
}