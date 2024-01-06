load("config.js");
function execute(url) {
    let bookId = url.split('/').pop().split('.')[0];
    let response = fetch(BASE_URL + "/api/story/" + bookId);
    if (response.ok) {
        let json = response.json();
        let genres = [];
        json.categories.forEach(e => {
            genres.push({
                title: e.name,
                input: BASE_URL + "/api/category/" + e.id + "/story?per_page=10",
                script: "source.js"
            });
        });
        json.tags.forEach(e => {
            genres.push({
                title: e.name,
                input: BASE_URL + "/api/tag/" + e.id + "/story?per_page=10",
                script: "source.js"
            });
        });
        return Response.success({
            name: json.name,
            cover: json.cover,
            author: json.author.name,
            description: json.desc,
            genres: genres,
            detail: "Đánh giá " + json.avg_rating + "<br>" + json.chapters_count + " chương" + "<br>" + json.total_words + " chữ" + "<br>" + json.view + " đọc",
            ongoing: json.status === 0,
            suggests: [
                {
                    title: "Cùng tác giả",
                    input: BASE_URL + "/api/author/" + json.author.id + "/story",
                    script: "suggest.js"
                }
            ],
        });
    }
    return Response.success(JSON.parse(json));
}
