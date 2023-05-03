function execute() {
    return Response.success([
        {title: "Mới Cập Nhật", input: "all", script: "gen.js"},
        {title: "Truyện Full", input: "truyen-full", script: "gen.js"},
        {title: "Truyện Đề Cử", input: "truyen-de-cu", script: "gen.js"},
    ]);
}