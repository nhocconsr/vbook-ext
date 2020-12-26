function execute() {
    return Response.success([
        {title: "Lastest", input: "https://readmanhwa.com/api/comics", script: "gen.js"},
        {title: "Popular", input: "https://readmanhwa.com/api/comics", script: "top.js"},
    ]);
}