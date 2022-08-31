let i2cDevice = 95;
let message = 0;

basic.forever(function () {
message = pins.i2cReadNumber(i2cDevice, NumberFormat.Int8LE,false)
if(message != 0) {
serial.writeLine("" + String.fromCharCode(message))
}
})

function hex_to_ascii(str1: number)
 {
	let hex  = str1.toString();
	let str = '';
	for (let n = 0; n < hex.length; n += 2) {
		str += String.fromCharCode(parseInt(hex.substr(n, 2), 16));
	}
	return str;
 }