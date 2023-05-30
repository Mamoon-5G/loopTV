function filterAnime() {
    let input = document.getElementById("search").value.toLowerCase();
    let cards = document.getElementsByClassName("maincard");

    for (let i = 0; i < cards.length; i++) {
        let name = cards[i].getElementsByTagName("b")[0].innerText.toLowerCase();

        if (name.includes(input)) {
            cards[i].style.display = "flex";
        } else {
            cards[i].style.display = "none";
        }
    }
}
document.getElementById("search").addEventListener("input", filterAnime);
function redirect(id) {
    switch (id) {
        case 'onepiece':
            window.open("https://sanji.to/watch/one-piece-100?ep=2142", '_blank')
            break;
        case 'hxh':
            window.open("https://sanji.to/watch/hunter-x-hunter-2?ep=65", '_blank')
            break;
        case 'deathnote':
            window.open("https://sanji.to/watch/death-note-60?ep=1464", '_blank')
            break;
        case 'opm':
            window.open("https://sanji.to/watch/one-punch-man-63?ep=1501", '_blank')
            break;
        case 'naruto':
            window.open("https://sanji.to/naruto-677?ref=search", '_blank')
            break;
        case 'bleach':
            window.open("https://sanji.to/bleach-806?ref=search", '_blank')
            break;
        case 'aot':
            window.open("https://sanji.to/attack-on-titan-112?ref=search.", '_blank')
            break;
        case 'steinsgate':
            window.open("https://sanji.to/steinsgate-3?ref=search", '_blank')
            break;
        case 'parasyte':
            window.open("https://sanji.to/watch/parasyte-the-maxim-136?ep=3884", '_blank')
            break;
        case 'sds':
            window.open("https://sanji.to/the-seven-deadly-sins-561?ref=search", '_blank')
            break;
        case 'mosnter':
            window.open("https://sanji.to/watch/monster-37?ep=1046", '_blank')
            break;
        case 'assassinationclass':
            window.open("https://sanji.to/assassination-classroom-372?ref=search", '_blank')
            break;
        case 'codegeass':
            window.open("https://sanji.to/code-geass-lelouch-of-the-rebellion-41", '_blank')
            break;
        case 'vinland':
            window.open("https://sanji.to/vinland-saga-40?ref=search", '_blank')
            break;
        case 'tpnl':
            window.open("https://sanji.to/the-promised-neverland-55?ref=search", '_blank')
            break;
        case 'fmab':
            window.open("https://animesuge.to/anime/fullmetal-alchemist-brotherhood-0r7/ep-1", '_blank')
            break;
        case 'erased':
            window.open("https://animesuge.to/anime/erased-kkw/ep-1", '_blank')
            break;
        case 'demonslayer':
            window.open("https://animesuge.to/anime/demon-slayer-kimetsu-no-yaiba-6q67/ep-1", '_blank')
            break;
        case 'drstone':
            window.open("https://animesuge.to/anime/dr-stone-lo6q/ep-1", '_blank')
            break;
        case 'another':
            window.open("https://animesuge.to/anime/another-ojn5/ep-1", '_blank')
            break;
        case 'classelite':
            window.open("https://animesuge.to/anime/classroom-of-the-elite-07o9/ep-1", '_blank')
            break;
        case 'ngnl':
            window.open("https://animesuge.to/anime/no-game-no-life-4qkm/ep-1", '_blank')
            break;
        case 'noragami':
            window.open("https://sanji.to/watch/one-piece-100?ep=2142", '_blank')
            break;
        case 'yourlie':
            window.open("https://animesuge.to/anime/your-lie-in-april-7w6/ep-1", '_blank')
            break;
        case 'mob100':
            window.open("https://animesuge.to/anime/mob-psycho-100-80m3/ep-1", '_blank')
            break;
        case 'tokyoghoul':
            window.open("https://animesuge.to/anime/tokyo-ghoul-7w06/ep-1", '_blank')
            break;
        default:
            break;
    }
}