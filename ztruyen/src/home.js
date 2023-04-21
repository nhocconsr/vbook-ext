function execute() {
    return Response.success([
        {title: "Truyện full", input: "https://ztruyen.vn/danh-sach/truyen-full", script: "gen2.js"},
        {title: "Truyện mới", input: "https://ztruyen.vn/danh-sach/truyen-moi", script: "gen2.js"},
        {title: "Truyện yêu thích", input: "https://ztruyen.vn/danh-sach/truyen-yeu-thich", script: "gen2.js"}
    ]);
}