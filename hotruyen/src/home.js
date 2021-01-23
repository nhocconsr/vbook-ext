function execute() {
    return Response.success([
        {title: "Nam Sinh", input: "https://hotruyen.com/truyen-nam-sinh/", script: "gen.js"},
        {title: "Ngôn Tình", input: "https://hotruyen.com/truyen-ngon-tinh/", script: "gen.js"},
        {title: "Đam Mỹ", input: "https://hotruyen.com/truyen-dam-my/", script: "gen.js"},
        {title: "Vô CP", input: "https://hotruyen.com/truyen-vo-cp/", script: "gen.js"},
        {title: "Bách Hợp", input: "https://hotruyen.com/truyen-bach-hop/", script: "gen.js"},
        {title: "Khác", input: "https://hotruyen.com/truyen-khac/", script: "gen.js"},
    ]);
}