function execute() {
    return Response.success([
        {title: "Cập Nhật", input: "0", script: "gen.js"},
        {title: "Hoàn Thành", input: "1", script: "gen.js"},
        {title: "Sáng Tác", input: "https://sttruyen.com/cat/truyen-sang-tac/", script: "cat.js"},
        {title: "Tiên Hiệp", input: "https://sttruyen.com/cat/tien-hiep/", script: "cat.js"},
        {title: "Huyền Ảo", input: "https://sttruyen.com/cat/huyen-ao/", script: "cat.js"},
    ]);
}