local data = {}

table.insert(data, {
    ["title"] = "Home",
    ["script"] = "gen.lua",
    ["input"] = "https://truyennhieu.com/the-loai/"
})

table.insert(data, {
    ["title"] = "Việt Nam",
    ["script"] = "gen.lua",
    ["input"] = "https://truyennhieu.com/the-loai/viet-nam/5be1b09ee2f0522ba9218078"
})

table.insert(data, {
    ["title"] = "Đô Thị",
    ["script"] = "gen.lua",
    ["input"] = "https://truyennhieu.com/the-loai/do-thi/5bdec27dc551731a60abe201"
})

table.insert(data, {
    ["title"] = "Truyện Teen",
    ["script"] = "gen.lua",
    ["input"] = "https://truyennhieu.com/the-loai/truyen-teen/5bdefffe06c7c41b7eea519b"
})

return response:success(data)
