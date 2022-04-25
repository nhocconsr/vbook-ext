function execute() {
    return Response.success([
        { title: "Cập Nhật (Tranh)", input: "2", script: "gen.js" },
        { title: "Cập Nhật (Chữ)", input: "2", script: "gen2.js" },
        { title: "Bảng Xếp Hạng (Tranh)", input: "1", script: "gen.js" },
        { title: "Bảng Xếp Hạng (Chữ)", input: "1", script: "gen2.js" },
        { title: "Truyện Mới (Tranh)", input: "3", script: "gen.js" },
        { title: "Truyện Mới (Chữ)", input: "3", script: "gen2.js" },
    ]);
}