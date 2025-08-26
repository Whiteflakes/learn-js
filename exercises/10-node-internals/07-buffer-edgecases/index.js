function safeConcat(buffers) {
  // simple wrapper that filters zero-length buffers and concatenates
  const nonEmpty = buffers.filter(b => b && b.length);
  return Buffer.concat(nonEmpty);
}

function splitUtf8(buffer, index) {
  // return [left, right] ensuring we don't split a multi-byte char in middle
  // if index lands in the middle of a multi-byte utf8 sequence, move left until valid
  let i = index;
  while (i > 0 && (buffer[i] & 0xC0) === 0x80) i--;
  return [buffer.slice(0, i), buffer.slice(i)];
}

module.exports = { safeConcat, splitUtf8 };
