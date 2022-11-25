function execute() {
    return Response.success([
    {title : "Mới cập nhật", input : "SANGTAC new-chap", script: "gen.js" },
    {title : "Truyện hot", input : "HOT top-all", script: "gen.js" },
    {title : "Top sáng tác", input : "SANGTAC top-all-full", script: "gen.js" },
    {title : "Truyện mới", input : "SANGTAC new", script: "gen.js" },

    ])
}