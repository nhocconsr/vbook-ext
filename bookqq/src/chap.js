function execute(url) {
    let c = url.split('/');
    let response = fetch('https://book.qq.com/api/book/read', {
        method: "GET",
        queries: {
            bid : c[4],
            cid : c.pop()
        }
    });
    if (response.ok) {
        let json = response.json();
        if(json.data.chapterPrice > 0) let content = 'Chương VIP. Đăng nhập bằng trình duyệt vbook để đăng nhập và mua nhé ^^!'
        else content = json.data.content;
        content = content
            //.replace(/<a[^>]*>([^<]+)<\/a>/g,'')
            .replace(/\r\n/g,'<br>')
            .replace(/&(nbsp|amp|quot|lt|gt);/g, "")
            .replace(/(<br\s*\/?>){2,}/g, '<br>'); 
        return Response.success(content);
    }
    return null;
}