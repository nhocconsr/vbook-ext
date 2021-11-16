function execute() {
    return Response.success([
        {title: "最近更新", input: "lastupdate", script: "rank.js"},
        {title: "月点击榜", input: "monthvisit", script: "rank.js"},
        {title: "总推荐榜", input: "allvote", script: "rank.js"},
        {title: "总点击榜", input: "allvisit", script: "rank.js"},
        {title: "电击文库", input: "1", script: "gen.js"},
        {title: "HJ文库", input: "7", script: "gen.js"},
        {title: "少女文库", input: "12", script: "gen.js"},   
    ]);
}