function execute() {
    return Response.success([
        { title: "玄幻奇幻", input: "1", script: "gen.js" },
        { title: "武侠仙侠", input: "6", script: "gen.js" },
        { title: "同人小说", input: "44", script: "gen.js" },
        { title: "都市言情", input: "4", script: "gen.js" },
        { title: "军事历史", input: "3", script: "gen.js" },
        { title: "科幻网游", input: "2", script: "gen.js" },
    ]);
}