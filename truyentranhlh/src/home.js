function execute() {
    return Response.success([
        {title: "Cập Nhật", input: "https://truyentranhlh.net/danh-sach?sort=update", script: "gen.js"},
        {title: "Truyện Mới", input: "https://truyentranhlh.net/danh-sach?sort=new", script: "gen.js"},
        {title: "Xem Nhiều", input: "https://truyentranhlh.net/danh-sach?sort=top", script: "gen.js"}
    ]);
}