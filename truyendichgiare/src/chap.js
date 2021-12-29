function execute(url) {
    let response = fetch(url);
    if(response.ok){
        let doc = response.html()
        let content = doc.select(".chapter-content").html();
        if(!content) content = 'Chương VIP. Đăng nhập bằng trình duyệt để mua truyện sau đó xoá cache để đọc truyện!'
        content = content.replace(/\n/g,'')
                .replace(/<span.*?>.*?<\/span>/g, "")
                .replace(/(<br\s*\/?>( )?){2,}/g, '<br>')
                .replace('truyenyy.com','')
                .replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi,'')
                .replace(/<ins\s+class="adsbygoogle">[\S\s]*?<\/ins>/gi,'');
        return Response.success(content);
    }
    return null;
}