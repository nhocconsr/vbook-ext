function execute() {
    return Response.success([
        { title: "最近更新", input: "lastupdate", script: "gen.js" },
        { title: "最新入库", input: "postdate", script: "gen.js" },
        { title: "玄幻魔法", input: "1", script: "cat.js" },
        { title: "仙侠修真", input: "2", script: "cat.js" },
        { title: "都市言情", input: "3", script: "cat.js" },
        { title: "历史军事", input: "4", script: "cat.js" },
        { title: "网游动漫", input: "5", script: "cat.js" },
        { title: "科幻小说", input: "6", script: "cat.js" },
    ]);
}