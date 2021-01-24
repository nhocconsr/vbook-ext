local url = ...
local list = {}
local doc = http:get(url):html()
if doc ~= nil then
    local bookId = doc:select("input[id=book-id]"):first():attr('value')
    local chap = http:get('https://truyennhieu.com/ajax/books/'..bookId..'/read-chapter-menu'):table()
    for k, v in ipairs(chap) do
        local chap = {
            ["name"] = v["name"],
            ["url"] = v["link"],
            ["host"] = "https://truyennhieu.com",
        }
        table.insert(list, chap)
    end
    return response:success(list)
end
return nil