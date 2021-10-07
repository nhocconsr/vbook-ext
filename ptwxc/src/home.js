function execute() {
    return Response.success([
        { title: "小說更新", input: "postdate", script: "gen.js" },
        { title: "日點擊", input: "dayvisit", script: "rank.js" },
        { title: "評論數", input: "comment", script: "rank.js" },
        { title: "下載數", input: "down", script: "rank.js" },
    ]);
}