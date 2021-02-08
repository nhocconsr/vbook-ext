function execute() {
    return Response.success([
        { title: "全部小说", input: "0", script: "gen.js" },
        { title: "玄幻奇幻", input: "1", script: "gen.js" },
        { title: "武侠仙侠", input: "2", script: "gen.js" },
        { title: "都市生活", input: "3", script: "gen.js" },
        { title: "历史军事", input: "4", script: "gen.js" },
    ]);
}