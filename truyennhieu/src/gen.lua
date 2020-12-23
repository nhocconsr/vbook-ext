local url, page = ...

if text:is_empty(page) then
    page = 1
end
local doc = http:get(url .. "?page=" .. page):html()

if doc ~= nil then
    local el = doc:select(".box-cate-list > ul > li")
    local novelList = {}
    local next = doc:select(".box-page-view a.active + a"):text()

    for i = 1, el:size() do
        local e = el:get(i - 1)
        local novel = {}
        novel["name"] = e:select("h3 a"):text()
        novel["link"] = e:select("h3 a"):attr("href")
        novel["description"] = e:select(".show-author a"):text()
        novel["cover"] = e:select(".img img"):attr("data-src")
        novel["host"] = "https://truyennhieu.com"
        table.insert(novelList, novel)
    end

    return response:success(novelList, next)
end

return nil