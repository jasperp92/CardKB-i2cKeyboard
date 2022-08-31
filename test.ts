let letter = ""
basic.forever(function () {
    letter = CardKB.readLetter(characterFormat.charcode)
    if (letter == "-73") {
        basic.showIcon(IconNames.ArrowEast)
    } else if (letter == "-74") {
        basic.showIcon(IconNames.ArrowSouth)
    } else if (letter == "-75") {
        basic.showIcon(IconNames.ArrowNorth)
    } else if (letter == "-76") {
        basic.showIcon(IconNames.ArrowWest)
    }
})
