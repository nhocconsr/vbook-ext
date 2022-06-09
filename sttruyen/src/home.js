function execute() {
    return Response.success([
        {title: "Truyện Dịch", input: "https://sttruyen.com/cat/truyen-dich", script: "gen.js"},
        {title: "Tiên Hiệp", input: "https://sttruyen.com/cat/tien-hiep/", script: "gen.js"},
        {title: "Kiếm Tu", input: "https://sttruyen.com/cat/kiem-tu", script: "gen.js"},
        {title: "Sáng Tác", input: "https://sttruyen.com/cat/truyen-sang-tac/", script: "gen.js"},
    ]);
}