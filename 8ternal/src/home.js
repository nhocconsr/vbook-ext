load('config.js');
function execute() {
    return Response.success([
        {title: "Đọc truyện", input: BASE_URL +"series.html", script: "gen.js"},
    ]);
}