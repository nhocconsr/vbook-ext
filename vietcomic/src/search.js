function execute(key, page){
    function change_alias( alias ){
        var str = alias;
        str= str.toLowerCase(); 
        str= str.replace(/Ă |Ă¡|áº¡|áº£|Ă£|Ă¢|áº§|áº¥|áº­|áº©|áº«|Äƒ|áº±|áº¯|áº·|áº³|áºµ/g,"a"); 
        str= str.replace(/Ă¨|Ă©|áº¹|áº»|áº½|Ăª|á»|áº¿|á»‡|á»ƒ|á»…/g,"e"); 
        str= str.replace(/Ă¬|Ă­|á»‹|á»‰|Ä©/g,"i"); 
        str= str.replace(/Ă²|Ă³|á»|á»|Ăµ|Ă´|á»“|á»‘|á»™|á»•|á»—|Æ¡|á»|á»›  |á»£|á»Ÿ|á»¡/g,"o"); 
        str= str.replace(/Ă¹|Ăº|á»¥|á»§|Å©|Æ°|á»«|á»©|á»±|á»­|á»¯/g,"u"); 
        str= str.replace(/á»³|Ă½|á»µ|á»·|á»¹/g,"y"); 
        str= str.replace(/Ä‘/g,"d"); 
        str= str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'| |\"|\&|\#|\[|\]|~|-|$|_/g,"_");
        /* tĂ¬m vĂ  thay tháº¿ cĂ¡c kĂ­ tá»± Ä‘áº·c biá»‡t trong chuá»—i sang kĂ­ tá»± - */
        str= str.replace(/_+_/g,"_"); //thay tháº¿ 2- thĂ nh 1-
        str= str.replace(/^\_+|\_+$/g,""); 
        //cáº¯t bá» kĂ½ tá»± - á»Ÿ Ä‘áº§u vĂ  cuá»‘i chuá»—i 
        return str;
    }

    function get_slug(id,name) {
        if(id != null) {
            url = change_alias(name) + "-" + id;
            return url
        }
    }

    const json = Http.get('https://vietcomic.net/api/searchStory/'+key).string()
    var chapList = JSON.parse(json);
    const list = [];
    for (var i = 0; i < chapList.length; i++) {
        var chap = chapList[i]
        list.push({
            name: chap['name'],
            link: get_slug(chap['id'],chap['name']),
            cover: chap['image'],
            description: chap['chapter_lastname'],
            host: "https://vietcomic.net"
        })
    }

    return Response.success(list)

}