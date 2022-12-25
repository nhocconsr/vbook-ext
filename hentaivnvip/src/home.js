function execute() {
    return Response.success([
        {title: "Cập Nhật", input: "/truyen-hentai-moi", script: "gen.js"},
        {title: "Hot Tuần", input: "/truyen-hot", script: "gen.js"},
        {title: "Full Color", input: "/the-loai/full-color", script: "gen.js"},
        {title: "Không Che", input: "/the-loai/khong-che", script: "gen.js"},
    ]);
}