function execute() {
    return Response.success([
        {title: "Update", input: "update", script: "gen.js"},
        {title: "Truyện Full", input: "truyen-full", script: "gen.js"},
        {title: "Truyện Đề Cử", input: "truyen-de-cu", script: "gen.js"},
    ]);
}