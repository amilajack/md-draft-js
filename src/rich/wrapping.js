const prefixes =
  '(?:\\s{4,}|\\s*>|\\s*-\\s+|\\s*\\d+\\.|=|\\+|-|_|\\*|#|\\s*\\[[^\n]]+\\]:)';
const rleadingprefixes = new RegExp(`^${prefixes}`, '');
const rtext = new RegExp(`([^\\n])\\n(?!(\\n|${prefixes}))`, 'g');
const rtrailingspaces = /\s+$/;

function unwrap(chunks) {
  rtext.lastIndex = 0;

  return { ...chunks, selection: chunks.selection.replace(rtext, '$1 $2') };
}

function wrap(chunks, len) {
  const regex = new RegExp(`(.{1,${len}})( +|$\\n?)`, 'gm');

  const result = unwrap(chunks);
  result.selection = result.selection
    .replace(regex, replacer)
    .replace(rtrailingspaces, '');

  return result;

  function replacer(line, marked) {
    return rleadingprefixes.test(line) ? line : `${marked}\n`;
  }
}

module.exports.wrap = wrap;
module.exports.unwrap = unwrap;
