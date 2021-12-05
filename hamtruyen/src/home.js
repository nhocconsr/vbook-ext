function execute() {
    return Response.success([
        { title: "Cập Nhật", input: "2", script: "gen.js" },
        { title: "Bảng Xếp Hạng", input: "1", script: "gen.js" },
        { title: "Truyện Mới", input: "3", script: "gen.js" },
        { title: "Hoàn Thành", input: "2", script: "source.js" },
    ]);
}