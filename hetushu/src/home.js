function execute() {
    return Response.success([
        { title: "全部小说", input: "0", script: "gen.js" },
        { title: "连载", input: "1", script: "gen.js" },
        { title: "完本", input: "2", script: "gen.js" },
    ]);
}