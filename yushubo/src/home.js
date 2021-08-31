function execute() {
    return Response.success([
        { title: "小说书库", input: "all.html", script: "gen.js" },
        { title: "玄幻奇幻", input: "book_55.html", script: "source.js" },
        { title: "武侠修真", input: "book_57.html", script: "source.js" },
        { title: "都市异能", input: "book_59.html", script: "source.js" },
        { title: "科幻灭世", input: "book_65.html", script: "source.js" },
    ]);
}