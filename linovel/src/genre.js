function execute() {
    var html = '<ul><li class="special"> <a rel="nofollow" href="1" class=""> 幻想 </a> </li><li class="special"> <a rel="nofollow" href="2" class=""> 战斗 </a> </li><li class="special"> <a rel="nofollow" href="3" class=""> 恋爱 </a> </li><li class="special"> <a rel="nofollow" href="4" class=""> 异界 </a> </li><li class="special"> <a rel="nofollow" href="5" class=""> 搞笑 </a> </li><li class="special"> <a rel="nofollow" href="6" class=""> 日常 </a> </li><li class="special"> <a rel="nofollow" href="7" class=""> 校园 </a> </li><li class="special"> <a rel="nofollow" href="8" class=""> 后宫 </a> </li><li class="special"> <a rel="nofollow" href="10" class=""> 科幻 </a> </li><li class="special"> <a rel="nofollow" href="11" class=""> 治愈 </a> </li><li class="special"> <a rel="nofollow" href="12" class=""> 超能力 </a> </li><li class="special"> <a rel="nofollow" href="13" class=""> 节操 </a> </li><li class="special"> <a rel="nofollow" href="14" class=""> 妖怪 </a> </li><li class="special"> <a rel="nofollow" href="15" class=""> 恐怖 </a> </li><li class="special"> <a rel="nofollow" href="16" class=""> 妹控 </a> </li><li class="special"> <a rel="nofollow" href="17" class=""> 伪娘 </a> </li><li class="special"> <a rel="nofollow" href="18" class=""> 魔法少女 </a> </li><li class="special"> <a rel="nofollow" href="19" class=""> 乙女 </a> </li><li class="special"> <a rel="nofollow" href="20" class=""> 同人 </a> </li><li class="special"> <a rel="nofollow" href="21" class=""> 百合 </a> </li><li class="special"> <a rel="nofollow" href="22" class=""> 偶像 </a> </li><li class="special"> <a rel="nofollow" href="104" class=""> 悬疑 </a> </li></ul>';

    var doc = Html.parse(html)

    const el = doc.select("li a");
    const data = [];
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        data.push({
           title: e.text(),
           input: e.attr('href'),
           script: 'gen.js'
        });
    }
    return Response.success(data);
}