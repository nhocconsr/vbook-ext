function execute() {
    return Response.success([
        {title: "Cập Nhật", input: "https://truyenthoi.net/truyen-moi-cap-nhat", script: "gen.js"},
        {title: "Truyện Mới", input: "https://truyenthoi.net/truyen-moi", script: "gen.js"},
        {title: "Đọc Nhiều", input: "https://truyenthoi.net/truyen-doc-nhieu", script: "gen.js"},
        {title: "Hoàn Thành", input: "https://truyenthoi.net/truyen-hoan-thanh", script: "gen.js"}
    ]);
}