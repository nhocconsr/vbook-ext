function execute() {
    return Response.success([
        {title: "Cập Nhật", input: "/the-loai/moi-cap-nhap", script: "gen.js"},
        {title: "Hot", input: "/the-loai/dang-hot", script: "gen.js"},
        {title: "Manga", input: "/the-loai/manga", script: "gen.js"},
        {title: "Webtoon", input: "/the-loai/webtoon", script: "gen.js"}
    ]);
}