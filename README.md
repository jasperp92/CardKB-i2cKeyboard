
This is a very basic MakeCode extension for the Grove Keyboard "CardKB" of M5Stack. It's still in the making.
This extension will work for the Calliope mini as well for the BBC micro:bit.

Further information can be found here: https://docs.m5stack.com/en/unit/cardkb

### Wiring:
On the Calliope mini the wiring is quite simple. Just plug the keyboard to the left **A0 Grove-port**. 
- It uses the I²C protocol. 
- The I²C-address of the keyboard is **0x5F (95)**
- It works with **3.3 volts**, but **not** with 5

### Example 

**read string**

The minimal setup is to read the keyboard in the loop and directly feed it to the showString, to see the letters on the LED-matrix. You can also store values in arrays for words, or send it to the serialport. The output is a string.

```blocks
basic.forever(function () {
    basic.showString(CardKB.readString())
})
```

**read charcode**
This outputs the charcode as numbers.
This is an example of using the charcode to create strings with the text block. Usually the Keyboard functions for reading charcode or letter should only evoked once and stored in a variable.

```blocks
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
```

#### Issues
- reading the I²C Keyboard doesnt work when evoked multiple times.
- Return nothing is not possible and didn't even worked with changing the tsconfig.json to         ```"noImplicitReturns": false```
That is annyoing because the keyboard returns the whole time 0. If there is a if-statement ```(output != 0)``` to prevent that the alternating output path still needs to return a value something like ```""``` ```null``` or ```0``` and can't return nothing like in Javascript ```return;```

