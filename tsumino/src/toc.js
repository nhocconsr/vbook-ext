function execute(url) {
    var bookId = url.split('/').pop();
    return Response.success([{
        name: 'One Shot',
        url: 'https://www.tsumino.com/Read/Index/'+bookId,
        host: "https://www.tsumino.com"
    }]);
}