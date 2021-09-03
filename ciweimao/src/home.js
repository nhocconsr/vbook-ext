function execute() {
    return Response.success([
        { title: "新书榜", input: "yp_new-week", script: "gen.js" },
        { title: "吐槽榜", input: "tsukkomi", script: "gen.js" }, 
        { title: "推荐榜", input: "recommend", script: "gen.js" },
        { title: "推荐榜", input: "recommend", script: "gen.js" },
        { title: "订阅榜", input: "buy", script: "gen.js" },
        { title: "更新榜", input: "get-update-most-week", script: "gen.js" },
    ]);
}