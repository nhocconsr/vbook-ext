function execute() {
    return Response.success([
        { title: "玄幻奇幻", input: "xuanhuan", script: "gen.js" },
        { title: "武侠修真", input: "wuxia", script: "gen.js" },
        { title: "都市生活", input: "dushi", script: "gen.js" },
        { title: "历史军事", input: "lishi", script: "gen.js" },
    ]);
}