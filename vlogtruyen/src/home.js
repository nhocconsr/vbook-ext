function execute() {
    return Response.success([
        {title: "Cập Nhật", input: "https://vlogtruyen.net/the-loai/moi-cap-nhap", script: "gen.js"},
        {title: "Hot", input: "https://vlogtruyen.net/the-loai/dang-hot", script: "gen.js"},
        {title: "Manga", input: "https://vlogtruyen.net/the-loai/manga", script: "gen.js"},
        {title: "Webtoon", input: "https://vlogtruyen.net/the-loai/webtoon", script: "gen.js"}
    ]);
}