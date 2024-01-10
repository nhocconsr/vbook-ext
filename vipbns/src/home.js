load("config.js");

function execute() {
    return Response.success([
        {title: "Mới nhất", input: BASE_URL + "/api/story-newest?per_page=12", script: "source.js"},
        {title: "Chương mới", input: BASE_URL + "/api/latest-chapters?per_page=12", script: "newchap.js"},
        {title: "Ngọc phiếu (tuần)", input: BASE_URL + "/api/recommended-stories?per_page=12", script: "recommended.js"},
        {title: "Top yêu thích", input: BASE_URL + "/api/top-wishlist?per_page=12", script: "source.js"},
        {title: "Truyện hot", input: BASE_URL + "/api/story-hot?order_by=desc&per_page=12", script: "source.js"},
        {title: "Mới hoàn", input: BASE_URL + "/api/story-completed?per_page=12", script: "source.js"},
        {title: "Sáng tác", input: BASE_URL + "/api/story-by-source/3?per_page=12", script: "source.js"}
    ]);
}