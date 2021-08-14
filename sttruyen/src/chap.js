load("en.js");
load('base64.js');
function execute(url) {
    var doc = Http.get(url).string();
    const regex = /=encode("[\.+]")/g
    const arr = regex.exec(doc);


    return Response.success(arr);
}