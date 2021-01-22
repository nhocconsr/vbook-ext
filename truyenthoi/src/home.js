function execute() {
    return Response.success([
        {title: "Cập Nhật", input: "https://truyenthoi.com/truyen-moi-cap-nhat", script: "gen.js"},
        {title: "Truyện Mới", input: "https://truyenthoi.com/truyen-moi", script: "gen.js"},
        {title: "Đọc Nhiều", input: "https://truyenthoi.com/truyen-doc-nhieu", script: "gen.js"},
        {title: "Hoàn Thành", input: "https://truyenthoi.com/truyen-hoan-thanh", script: "gen.js"}
    ]);
}