(function() {
    let bodyTag = document.querySelector('body');

    window.onload = () => {
        bodyTag.classList.remove('loading');
    };

    var cards = $(".profilecard");
    for (var i = 0; i < cards.length; i++) {
        var target = Math.floor(Math.random() * cards.length - 1) + 1;
        var target2 = Math.floor(Math.random() * cards.length - 1) + 1;
        cards.eq(target).before(cards.eq(target2));
    }
}())
