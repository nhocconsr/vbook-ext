function execute() {
    return Response.success([
        { title: "Cập Nhật", input: "new", script: "gen.js" },
        { title: "Truyện Siêu Hay", input: "Truyện siêu hay", script: "source.js" },
        { title: "Đam Mỹ", input: "Đam Mỹ", script: "source.js" },
    ]);
}