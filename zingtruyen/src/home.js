function execute() {
    return Response.success([
        {title: "Tiểu Thuyết", input: "tieu-thuyet", script: "gen.js"},
        {title: "Fanfiction", input: "truyen-fanfiction", script: "gen.js"},
        {title: "Lãng mạn", input: "truyen-lang-man", script: "gen.js"},
    ]);
}