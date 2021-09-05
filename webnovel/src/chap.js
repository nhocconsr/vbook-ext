function execute(url) {
    const idBook = url.split('/')[0];
    const idChap = url.split('/')[1];
    var doc = Http.get('https://www.webnovel.com').cookie();
    const csrfToken =  doc.match( /_csrfToken=([^;]+);/ )[1];
    var json = Http.get('https://www.webnovel.com/go/pcm/chapter/getContent').params({
        _csrfToken : csrfToken,
        bookId : idBook,
        chapterId : idChap
    }).string();
    var chapter_contents = JSON.parse(json).data.chapterInfo.contents
    var chapter_body = '';
    chapter_contents.forEach(para => {
        chapter_body += para["content"] + '<br>'
    });
    var content = chapter_body.replace(/<pirate>.*<\/pirate>/gm,'');
    return Response.success(content)
}