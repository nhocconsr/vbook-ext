function execute() {
    return Response.success([
        {title: "Cập nhật", input: "https://truyenwiki.net/index.php?filter=tat-ca&order=1", script: "gen.js"},
        {title: "Truyện mới", input: "https://truyenwiki.net/index.php?filter=tat-ca&order=2", script: "gen.js"},
        {title: "Top tuần", input: "https://truyenwiki.net/?rank", script: "gen.js"},
    ]);
}