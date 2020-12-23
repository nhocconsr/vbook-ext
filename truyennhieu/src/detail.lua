local url = ...
local doc = http:get(url):html()
if doc ~= nil then
    local book = {}
    book["name"] = doc:select("h1.hl-name-book"):text()
    book["cover"] = doc:select(".book-thum img"):attr("src")
    book["author"] = doc:select("a[href~=tac-gia]"):first():text()
    book["description"] = doc:select(".box-show-des"):html()
    book["detail"] = doc:select(".book-list-field .l-book-list-field"):html()
    book["ongoing"] = text:contains(doc:select(".status-chapter"):html(), "Đang ra")
    book["host"] = "http://truyennhieu.com"
    return response:success(book)
end
return nil