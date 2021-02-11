function execute() {
    return Response.success([
        { title: "玄幻奇幻", input: "xuanhuan", script: "gen.js" },
        { title: "武侠仙侠", input: "wuxia", script: "gen.js" },
        { title: "都市生活", input: "dushi", script: "gen.js" },
        { title: "历史军事", input: "lishi", script: "gen.js" },
        { title: "游戏竞技", input: "youxi", script: "gen.js" },
        { title: "科幻未来", input: "kehuan", script: "gen.js" },
    ]);
}