function execute() {
    return Response.success([
        { title: "Cập Nhật", input: "null", script: "update.js" },
        { title: "Miễn Phí", input: "isVip=false", script: "gen.js" },
        { title: "Hoàn Thành", input: "isFull=true", script: "gen.js" },
    ]);
}