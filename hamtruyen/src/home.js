function execute() {
    return Response.success([
        { title: "Cập nhật", input: "https://hamtruyen.vn", script: "gen.js" },
        { title: "Xem nhiều", input: "https://hamtruyen.vn", script: "top.js" },
        { title: "Manga", input: "https://hamtruyen.vn/Theloai/549f819f1788b6107431bd05/manga.html", script: "cat.js" },
        { title: "Huyền huyễn", input: "https://hamtruyen.vn/Theloai/549f819f1788b6107431bd08/huyen-huyen.html", script: "cat.js" },
    ]);
}