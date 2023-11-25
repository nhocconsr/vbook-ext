function execute() {
    return Response.success([
        { title: "最新", input: "a-a-a", script: "gen.js" },
        { title: "女生原创", input: "1-a-a", script: "gen.js" },
        { title: "男生原创", input: "0-a-a", script: "gen.js" },
        { title: "出版图书", input: "2-a-a", script: "gen.js" }
    ]);
}