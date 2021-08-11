function execute() {
    return Response.success([
        {title: "Mới nhất", input: "truyen-moi", script: "gen.js"},
        {title: "Hoàn thành", input: "truyen-full", script: "gen.js"},
        {title: "Truyện Hot", input: "truyen-hot", script: "gen.js"}
    ]);
}