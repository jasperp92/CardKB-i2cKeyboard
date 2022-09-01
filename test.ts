/* this is an example of using the charcode to create strings with the text block. Usually the Keyboard functions for reading charcode or letter should only evoked once and stored in a variable.
 */

let charcode = 0
basic.forever(function () {
    charcode = CardKB.readCharcode()
    basic.showString(String.fromCharCode(charcode))
    if (charcode == -73) {
        basic.showIcon(IconNames.ArrowEast)
    } else if (charcode == -74) {
        basic.showIcon(IconNames.ArrowSouth)
    } else if (charcode == -75) {
        basic.showIcon(IconNames.ArrowNorth)
    } else if (charcode == -76) {
        basic.showIcon(IconNames.ArrowWest)
    }
})
