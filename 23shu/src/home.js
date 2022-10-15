function execute() {
    return Response.success([
        { title: "男频", input: "man", script: "gen.js" },
        { title: "女频", input: "nv", script: "gen.js" },
        { title: "完本", input: "all", script: "source.js" },
    ]);
}