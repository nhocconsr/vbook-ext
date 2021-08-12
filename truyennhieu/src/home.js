function execute() {
    return Response.success([
        {title: "Home", input: "https://truyennhieu.com/the-loai/", script: "gen.js"},
        {title: "Việt Nam", input: "https://truyennhieu.com/the-loai/viet-nam/5be1b09ee2f0522ba9218078", script: "gen.js"},
        {title: "Đô Thị", input: "https://truyennhieu.com/the-loai/do-thi/5bdec27dc551731a60abe201", script: "gen.js"},
        {title: "Truyện Teen", input: "https://truyennhieu.com/the-loai/truyen-teen/5bdefffe06c7c41b7eea519b", script: "gen.js"}
    ]);
}