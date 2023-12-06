const byteSize = (str) => {
  // write your code here
	const encoder = new TextEncoder('utf-8');

  // Encode the string into a Uint8Array
  const encodedArray = encoder.encode(str);

  // Return the byte size (length of the Uint8Array)
  return encodedArray.length;  
};

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));
