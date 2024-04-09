// Assuming you have a buffer object named 'buffer'
let buffer = Buffer.from([72, 101, 108, 108, 111]); // Example buffer

// Convert buffer to string using default encoding (UTF-8)
let stringFromBuffer = buffer.toString();
console.log(stringFromBuffer); // Output: Hello

// If you have a buffer representing text data with a specific encoding (e.g., 'utf8')
let utf8EncodedBuffer = Buffer.from([72, 101, 108, 108, 111], "utf8");
let stringFromUTF8Buffer = utf8EncodedBuffer.toString();
console.log(stringFromUTF8Buffer); // Output: Hello
