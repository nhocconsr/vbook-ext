load('crypto.js');
load('config.js');
const apiHost = 'https://api.creative-comic.tw';
function execute(url) {
    let uuid = getUuid();
    let cid = url.match('\\d+').shift();
    let reponse = fetch(`https://api.creative-comic.tw/book/chapter/${cid}/`, {
        method: "GET", // GET, POST, PUT, DELETE, PATCH
        headers: {
            device : device,
            uuid: uuid
        },
    }).json();
    let chapter = reponse.data.chapter.proportion
    chapter.forEach(p => {
        let getkey = getImgKey(p.id, uuid);
        imgKey = getkey.data.key;
        let token = 'freeforccc2020reading'
        const realKey = getRealKey(imgKey,token);
        const quality = '2';
        const encrypted = getImgEncrypted(p.id, quality);
        let tes = decrypt(encrypted, realKey);
        return Response.success(tes)
    })
    return null
}

function decrypt(encrypted, key){
    let decrypted = CryptoJS.AES.decrypt(encrypted,
    CryptoJS.enc.Hex.parse(key.key),{
        iv: CryptoJS.enc.Hex.parse(key.iv),
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
        }
    );
    return decrypted.toString(CryptoJS.enc.Utf8)
} 

function token2Key(token){
    const t = CryptoJS.SHA512(token).toString();
    return {
        key: t.substring(0, 64),
        iv: t.substring(30, 62), // t.substr(30, 32)
    };
};

function getRealKey(imgKey, token){
    const secrets = token2Key(token);
    const key = decrypt(imgKey, secrets);
    const realKey = key.split(':');
    return {
        key: realKey[0],
        iv: realKey[1],
    };
};

function getImgEncrypted(pageId, quality){
    const res = fetch(`https://storage.googleapis.com/ccc-www/fs/chapter_content/encrypt/${pageId}/${quality}`, {
        method : "GET",
        headers: {
            device,
        },
    });
    return res.base64()
};
function getImgKey(pageId, uuid){
    let gest = fetch(`https://api.creative-comic.tw/book/chapter/image/${pageId}`, {
        method : "GET",
        headers: {
            device,
            uuid,
        },
    }).json();
    return gest;
}
    
