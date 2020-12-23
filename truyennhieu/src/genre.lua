local doc = http:get('https://truyennhieu.com/the-loai'):html()
local genre = {}
if doc ~= nil then
    local el = doc:select(".cate-left-menu > ul > li a")
    for i = 3, el:size() - 1 do
        local e = el:get(i)
        local link = {}
        link["title"] = e:text()
        link["input"] = "https://truyennhieu.com"..e:attr("href")
        link["script"] = "gen.lua"
        table.insert(genre, link)
    end
    return response:success(genre)
end

return nil