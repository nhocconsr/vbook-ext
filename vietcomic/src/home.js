function execute() {
    return Response.success([
        { title: "Cập nhật", input: "https://vietcomic.net/truyen-tranh-hay?type=truyenmoi", script: "gen.js" },
        { title: "Truyện hot", input: "https://vietcomic.net/truyen-tranh-hay?type=hot", script: "gen.js" },
        { title: "Siêu phẩm", input: "https://vietcomic.net/truyen-tranh-hay?type=sieu-pham", script: "gen.js" },
    ]);
}