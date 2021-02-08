function execute() {
    return Response.success([
        { title: "玄幻小说", input: "fenlei/1", script: "gen.js" },
        { title: "仙侠小说", input: "fenlei/2", script: "gen.js" },
        { title: "都市小说", input: "fenlei/3", script: "gen.js" },
        { title: "穿越小说", input: "fenlei/4", script: "gen.js" },
        { title: "军史小说", input: "fenlei/5", script: "gen.js" },
    ]);
}