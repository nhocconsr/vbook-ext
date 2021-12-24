function execute() {
    return Response.success([
        {title: "[男]新书榜", input: "534268", script: "gen.js"},
        {title: "[男]免费榜", input: "532707", script: "gen.js"},
        {title: "[女]新书榜", input: "534279", script: "gen.js"},
        {title: "[女]免费榜", input: "532790", script: "gen.js"},  
    ]);
}