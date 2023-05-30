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
