function execute() {
    return Response.success([
        { title: "全部小说", input: "all", script: "gen.js" },
        { title: "玄幻小说", input: "xuanhuan", script: "gen.js" },
        { title: "仙侠小说", input: "xianxia", script: "gen.js" },
        { title: "都市小说", input: "dushi", script: "gen.js" },
        { title: "军史小说", input: "junshi", script: "gen.js" },
        { title: "网游小说", input: "wangyou", script: "gen.js" },
        { title: "科幻小说", input: "kehuan", script: "gen.js" },
    ]);
}