load('crypto.js');
function execute(url, page) {
    if(!page) page = '1';
    var doc = Http.get('https://cmangatop.com/api/list_item').params({
        page : page,
        limit : '40',
        sort : 'new',
        type : 'all',
        tag : url,
        child : 'on',
        status : 'all',
        num_chapter : '0'
    }).string();
    var data = JSON.parse(decrypt_data(doc));
    var allPage = Math.floor(data['total']/40);
    const next = (page < allPage) ? (parseInt(page) + 1).toString() : null;
    var list = [];
    for(var i = 0; i < 40; i++){
        var item = data[i];
        list.push({
            name: item.name,
            link: item.url+'-'+item.id_book,
            cover: 'https://cmangatop.com/assets/tmp/book/avatar/'+item.avatar+'.jpg',
            description: 'Chap '+ item.last_chapter,
            host: "https://cmangatop.com"
        })
    }
    return Response.success(list,next)
}
function decrypt_data(data) {
    var parsed = JSON.parse(data);
    var type = parsed.ciphertext;
    var score = CryptoJS.enc.Hex.parse(parsed.iv);
    var lastviewmatrix = CryptoJS.enc.Hex.parse(parsed.salt);
    var adjustedLevel = CryptoJS.PBKDF2("nettruyenhayvn", lastviewmatrix, {
        "hasher": CryptoJS.algo.SHA512,
        "keySize": 64 / 8,
        "iterations": 999
    });
    var queryTokenScores = {};
    queryTokenScores["iv"] = score;
    var pixelSizeTargetMax = CryptoJS.AES.decrypt(type, adjustedLevel, queryTokenScores);
    return pixelSizeTargetMax.toString(CryptoJS.enc.Utf8);
}