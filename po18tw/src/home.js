function execute() {
    return Response.success([
        {title: "標籤", input: "tag", script: "gen2.js"},
        {title: "更新", input: "1", script: "gen.js"},
        {title: "完結", input: "2", script: "gen.js"},
    ]);
}