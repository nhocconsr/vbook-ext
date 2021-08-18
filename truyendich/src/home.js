function execute() {
    return Response.success([
        {title: "Cập Nhật", input: "P", script: "gen.js"},
        {title: "Hoàn Thành", input: "C", script: "gen.js"},
        {title: "Hot", input: "views", script: "hot.js"}
    ]);
}