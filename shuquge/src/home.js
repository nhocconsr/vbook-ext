function execute() {
    return Response.success([
        { title: "玄幻", input: "1", script: "gen.js" },
        { title: "武侠", input: "2", script: "gen.js" },
        { title: "都市", input: "3", script: "gen.js" },
        { title: "历史", input: "4", script: "gen.js" },
        { title: "侦探", input: "5", script: "gen.js" },
    ]);
}