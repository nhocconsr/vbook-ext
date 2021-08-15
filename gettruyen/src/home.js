function execute() {
    return Response.success([
        {title: "Home", input: "null", script: "gen.js"},
        {title: "Dịch", input: "1", script: "gen.js"},
        {title: "Convert", input: "2", script: "gen.js"},
        {title: "Raw", input: "3", script: "gen.js"}
    ]);
}