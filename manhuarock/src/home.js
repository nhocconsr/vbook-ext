function execute() {
    return Response.success([
        {title: "Hoàn thành", input: "https://manhuarock.net/hoan-thanh", script: "gen.js"},
        {title: "Xem nhiều", input: "https://manhuarock.net/xem-nhieu", script: "gen.js"},
        {title: "Lịch sử đọc", input: "https://manhuarock.net/history/", script: "gen.js"},
    ]);
}