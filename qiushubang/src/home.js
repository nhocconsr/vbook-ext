function execute() {
    return Response.success([
        {title: "最近更新", input: "0", script: "gen.js"},
        {title: "玄幻", input: "1", script: "gen.js"},
        {title: "奇幻", input: "2", script: "gen.js"},
        {title: "武侠", input: "3", script: "gen.js"}
    ]);   
}