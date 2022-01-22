function execute() {
 return Response.success([
    {title: "Truyện Hot", input: "truyenHot", script: "hot.js"},
    {title: "Truyện Mới", input: "truyenMoi", script: "gen.js"},
    {title: "Truyện Full", input: "truyenFull", script: "full.js"},
 ]);
}