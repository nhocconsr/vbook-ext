function execute() {
    return Response.success([
        { title: "全部小说", input: "fenlei", script: "gen.js" },
        { title: "玄幻·魔法", input: "fenlei1", script: "gen.js" },
        { title: "武侠.仙侠", input: "fenlei2", script: "gen.js" },
        { title: "都市·言情", input: "fenlei3", script: "gen.js" },
        { title: "历史·军事", input: "fenlei4", script: "gen.js" },
        { title: "侦探·推理", input: "fenlei5", script: "gen.js" },
        { title: "侦探·推理", input: "fenlei6", script: "gen.js" },
    ]);
}