local url = ...
local list = {}
local doc = http:get(url):html()
if doc ~= nil then
    local bookId = doc:select("input[id=book-id]"):first():attr('value')
    local allPage = doc:select(".box-page-view"):first():select("a"):last():text()
    for a = 0, allPage -1 do
        local chap = http:get('https://truyennhieu.com/ajax/books/'..bookId..'/chapters'):params({ ["page"] = a}):html()
        local el = chap:select(".box-show-chapter a")
        for i = 0, el:size() - 1 do
            local e = el:get(i)
            local chap = {}
            chap["name"] = e:text()
            chap["url"] = e:attr("href")
            chap["host"] = "https://truyennhieu.com"
            table.insert(list, chap)
        end
    end
    return response:success(list)
end
return nil