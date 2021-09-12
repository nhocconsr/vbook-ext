function execute() {
    return Response.success([
        { title: "玄幻魔法", input: "1", script: "gen.js" },
        { title: "仙侠修真", input: "2", script: "gen.js" },
        { title: "都市言情", input: "3", script: "gen.js" },
        { title: "历史军事", input: "4", script: "gen.js" },
        { title: "网游动漫", input: "5", script: "gen.js" },
        { title: "科幻小说", input: "6", script: "gen.js" },
    ]);
}