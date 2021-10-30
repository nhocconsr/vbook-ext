function execute() {
    return Response.success([
        {title: "Mới Nhất", input: "https://thienhatruyen.com/danh-muc/moi-nhat", script: "gen.js"},
        {title: "Hot", input: "https://thienhatruyen.com/danh-muc/dang-hot", script: "gen.js"},
        {title: "Xem Nhiều", input: "https://thienhatruyen.com/danh-muc/xem-nhieu", script: "gen.js"}
    ]);
}