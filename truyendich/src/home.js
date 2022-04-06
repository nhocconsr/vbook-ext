function execute() {
    return Response.success([
        {title: "Cập Nhật", input: "truyen-moi", script: "gen.js"},
        {title: "Hoàn Thành", input: "truyen-full", script: "gen.js"},
        {title: "Hot", input: "truyen-hot", script: "gen.js"}
    ]);
}