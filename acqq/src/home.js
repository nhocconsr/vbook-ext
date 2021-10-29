function execute() {
    return Response.success([
        {title: "少年", input: "1", script: "gen.js"},
        {title: "少女", input: "2", script: "gen.js"},
    ]);
}