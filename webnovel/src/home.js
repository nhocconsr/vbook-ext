function execute() {
    return Response.success([
        { title: "Update", input: "5", script: "gen.js" },
        { title: "Trending", input: "best_sellers", script: "rank.js" },
        { title: "Recommend", input: "2", script: "gen.js" },
        { title: "Popular", input: "1", script: "gen.js" },
        { title: "Power", input: "power_rank", script: "rank.js" },
    ]);
}