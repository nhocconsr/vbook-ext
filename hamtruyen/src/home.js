function execute() {
    return Response.success([
        { title: "Cập Nhật", input: "0", script: "gen.js" },
        { title: "Bảng Xếp Hạng", input: "1", script: "bxh.js" },
    ]);
}