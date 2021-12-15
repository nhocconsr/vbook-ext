function execute() {
    return Response.success([
        {title: "Cập Nhật", input: "", script: "gen.js"},
        {title: "Vip", input: "vip", script: "gen.js"},
        {title: "Sáng Tác", input: "sangtac", script: "gen.js"},
        {title: "Dịch", input: "trans", script: "gen.js"},  
    ]);
}