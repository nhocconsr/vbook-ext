function execute() {
    return Response.success([
        { title: "Cập Nhật", input: "", script: "gen.js" },
        { title: "Manhwa", input: "/tim-truyen/manhwa", script: "gen.js" },
        { title: "18+", input: "/tim-truyen/18", script: "gen.js" },
        { title: "Top Tuần", input: "5", script: "top.js" },
        { title: "Top Tháng", input: "3", script: "top.js" },
    ]);
}