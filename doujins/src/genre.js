function execute() {
    const data = [];
    var text = '<ul><li><a href=doujins-original-series-19934>Doujins- Original Series</a><li><a href=hentai-magazine-chapters-2766>Hentai Magazine Chapters</a><li><a href=/hentai-manga-214>Hentai Manga</a><li><a href=/fate-grand-order-doujins-28615>Fate Grand Order</a><li><a href=/cg-sets-original-series-14865></a>CG Sets - Original Series<li><a href=/hentai-game-cg-sets-2422></a>Hentai Game CG-Sets<li><a href=/touhou-doujins-7748>Touhou</a><li><a href=/one-piece-doujins-6080>One Piece</a><li><a href=/idolmaster-4281>Idolmaster</a></ul>';
    var doc = Html.parse(text);
    const el = doc.select('li a');
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        data.push({
           title: e.text(),
           input: e.attr('href').replace('/',''),
           script: 'gen.js'
        });
    }
    const doc2 = Http.get("https://doujins.com/tags").html();
    const el2 = doc2.select('#content .row .col-6 a');
    for (var i = 0; i < el2.size(); i++) {
        var e2 = el2.get(i);
        data.push({
           title: e2.text(),
           input: e2.attr('href').replace('/',''),
           script: 'gen.js'
        });
    }
    return Response.success(data);
}