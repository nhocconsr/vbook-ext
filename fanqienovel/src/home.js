function execute() {
    return Response.success([
        { title: "最新", input: "1", script: "gen.js" },
        { title: "最热", input: "0", script: "gen.js" },
        { title: "都市榜", input: "1", script: "rank.js" },
        { title: "玄幻榜", input: "7", script: "rank.js" },
        { title: "小众榜", input: "-1", script: "rank.js" },
        { title: "现言榜", input: "3", script: "rank.js" },
        { title: "古言榜", input: "5", script: "rank.js" }
    ]);
}