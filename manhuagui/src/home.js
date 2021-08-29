function execute() {
    return Response.success([
        {title: "最新更新", input: "update", script: "gen.js"},
        {title: "人气最旺", input: "view", script: "gen.js"},
        {title: "热血", input: "rexue/update", script: "gen.js"},
        {title: "冒险", input: "maoxian/update", script: "gen.js"},
    ]);
}