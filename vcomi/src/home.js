function execute() {
    return Response.success([
        {title: "Cập Nhật", input: "views", script: "gen.js"},
        {title: "Manga", input: "manga", script: "cat.js"},
        {title: "Tu Tiên", input: "tu-tien", script: "cat.js"},
        {title: "Đô Thị", input: "do-thi", script: "cat.js"},
    ]);
}