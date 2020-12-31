function execute() {
    return Response.success([
        {title: "Cập nhật", input: "https://truyentiki.com/index.php?filter=tat-ca&order=1", script: "gen.js"},
        {title: "Truyện mới", input: "https://truyentiki.com/index.php?filter=tat-ca&order=2", script: "gen.js"},
        {title: "Hoàn thành", input: "https://truyentiki.com/index.php?cat=tat-ca&full=1", script: "gen.js"},
        {title: "Top tuần", input: "https://truyentiki.com/?rank", script: "gen.js"},
    ]);
}