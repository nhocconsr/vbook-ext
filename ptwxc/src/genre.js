function execute() {
    var text = '<a href=xuanhuan>玄幻</a> <a href=qihuan>奇幻</a> <a href=wuxia>武俠</a> <a href=xianxia>仙俠</a> <a href=dushi>都市</a> <a href=lishi>曆史</a> <a href=junshi>軍事</a> <a href=youxi>遊戲</a> <a href=jingji>競技</a> <a href=kehuan>科幻</a> <a href=lingyi>靈異</a> <a href=qita>其他</a>';
    var doc = Html.parse(text);
    const data = [];
    const el = doc.select('a');
    el.forEach(e => data.push({
        title: e.text(),
        input: e.attr('href'),
        script: 'source.js'
    }));
    return Response.success(data);
}