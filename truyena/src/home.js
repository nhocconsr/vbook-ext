function execute() {
    return Response.success([
        {title: "Cập nhật", input: "https://truyena.com/index.php?cat=tat-ca", script: "gen.js"},
        {title: "Truyện mới", input: "https://truyena.com/index.php?cat=tat-ca&order=1", script: "gen.js"},
        {title: "Truyện Full", input: "https://truyena.com/index.php?cat=tat-ca&full=1", script: "gen.js"},
    ]);
}