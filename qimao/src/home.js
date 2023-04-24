function execute() {
    return Response.success([
        { title: "最新", input: "a", script: "gen.js" },
        { title: "女生原创", input: "1", script: "gen.js" },
        { title: "男生原创", input: "0", script: "gen.js" },
    ]);
}