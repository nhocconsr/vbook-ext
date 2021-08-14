function execute() {
    return Response.success([
        {title: "Cập Nhật", input: "0", script: "gen.js"},
        {title: "Hoàn Thành", input: "1", script: "gen.js"},
    ]);
}