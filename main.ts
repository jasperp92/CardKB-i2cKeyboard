/**
 * Functions are mapped to blocks using various macros
 * in comments starting with %. The most important macro
 * is "block", and it specifies that a block should be
 * generated for an **exported** function.
 */

enum characterFormat {
    //% block=ASCII
    ascii,
    //% block=Charcode
    charcode
}

//% color="#AA278D" weight=200 //% icon="\uf11c"
namespace CardKB {
    let i2cDevice = 95;

    //% block
    export function readCharCode() {
        let message2: number = 0;
        message2 = pins.i2cReadNumber(i2cDevice, NumberFormat.Int8LE, false)
        if (message2 != 0) {
            return message2
        }
        return;
    }

    //% block
        export function readLetter() {
        let message = 0;
        message = pins.i2cReadNumber(i2cDevice, NumberFormat.Int8LE, false)
        if (message != 0) {
            return String.fromCharCode(message)
        }
        return;
    }

}



/**
 * Functions are mapped to blocks using various macros
 * in comments starting with %. The most important macro
 * is "block", and it specifies that a block should be
 * generated for an **exported** function.


enum characterFormat {
    //% block=ASCII
    ascii,
    //% block=Charcode
    charcode
}

//% color="#AA278D" weight=200 //% icon="\uf11c"
namespace CardKB {
    let i2cDevice = 95;

    //% block
    export function readLetter(format: characterFormat) {
        let message = 0;
        message = pins.i2cReadNumber(i2cDevice, NumberFormat.Int8LE, false)
        if (message != 0) {
            if (format == characterFormat.ascii) {
                return String.fromCharCode(message)
            } else if (characterFormat.charcode) {
                return message.toString()
            }
        }
        return ""
    }

}


 */