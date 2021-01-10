function execute() {
    return Response.success([
        {title: "Ngôn tình", input: "https://thichtruyen.vn/danh-muc/truyen-ngon-tinh?tab=truyen-moi", script: "gen.js"},
        {title: "Truyện voz", input: "https://thichtruyen.vn/danh-muc/truyen-voz?tab=truyen-moi", script: "gen.js"},
        {title: "Truyện teen", input: "https://thichtruyen.vn/danh-muc/truyen-teen?tab=truyen-moi", script: "gen.js"},
        {title: "Đam mỹ", input: "https://thichtruyen.vn/danh-muc/dam-my?tab=truyen-moi", script: "gen.js"},
        {title: "Xuyên không", input: "https://thichtruyen.vn/danh-muc/xuyen-khong?tab=truyen-moi", script: "gen.js"},
    ]);
}