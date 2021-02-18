function execute() {
    return Response.success([
        {title: "Truyện Mới", input: "http://truyendichgiare.com/danh-sach/truyen-moi", script: "gen.js"},
        {title: "Truyện HOT", input: "http://truyendichgiare.com/danh-sach/truyen-hot", script: "gen.js"},
        {title: "Truyện Full", input: "http://truyendichgiare.com/danh-sach/truyen-full", script: "gen.js"},
        {title: "Truyện Free", input: "http://truyendichgiare.com/danh-sach/truyen-free", script: "gen.js"},
    ]);
}