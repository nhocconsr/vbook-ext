function execute() {
    return Response.success([
        { title: "Cập Nhật", input: "new-books", script: "gen.js" },
        { title: "Miễn Phí", input: "hot-free-books", script: "gen.js" },
        { title: "Truyện VIP", input: "hot-books", script: "gen.js" },
        { title: "Hoàn Thành", input: "full-books", script: "gen.js" },
    ]);
}