function printDeckOfCards(cards) {
    let res = [];

    for (let each of cards) {
        let face = each.slice(0, -1);
        let suit = each.slice(-1);

        try {
            let card = createCard(face, suit);
            res.push(card)
        } catch (error) {
            res = [`Invalid card: ${face}${suit}`]
        }
    }

    console.log(res.join(", "))

    function createCard(face, suit) {
        const validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']

        if (validFaces.indexOf(face.toString()) == -1) {
            throw new Error("Error");
        }

        switch (suit) {
            case "S":
                suit = '\u2660'
                break;
            case "H":
                suit = '\u2665'
                break;
            case "D":
                suit = '\u2666'
                break;
            case "C":
                suit = '\u2663'
                break;
                default:
                    throw new Error("Error")
        }
        return {
            face: face,
            suit: suit,
            toString() {
                return this.face + this.suit
            }
        }
    }

}
printDeckOfCards(['5S', '3D', 'QD', '1C']);