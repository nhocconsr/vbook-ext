function execute() {
    return Response.success([
        {title: "Tiểu Thuyết", input: "https://truyen3s.com/the-loai/tieu-thuyet", script: "gen.js"},
        {title: "Truyện Teen", input: "https://truyen3s.com/the-loai/truyen-teen", script: "gen.js"},
        {title: "Truyện Fanfiction", input: "https://truyen3s.com/the-loai/fan-fiction", script: "gen.js"},
    ]);
}