function execute() {
    return Response.success([
        { title: "最近更新", input: "-1", script: "gen.js" },
        { title: "重推榜", input: "zt", script: "top.js" },
        { title: "佳作榜", input: "jz", script: "top.js" },
    ]);
}