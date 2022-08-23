function execute() {
    const doc = Http.get('https://truyenvipfull.com')
    return Response.success([
        { title: "Hot 24H", input: "https://truyenvipfull.com", script: "hot.js" },
        { title: "Mới cập nhật", input: "https://truyenvipfull.com", script: "update.js" },
        { title: "Truyện FULL", input: "https://truyenvipfull.com", script: "full.js" },
    ]);
}