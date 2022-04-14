export function indent(str, numOfIndents, spacesPerIndent = 2) {
  const newStr = str.replace(
    /^(?=.)/gm,
    new Array(numOfIndents + 1).join("\t")
  );
  const newNumOfIndents = new Array(spacesPerIndent + 1 || 0).join(" "); // re-use
  return spacesPerIndent
    ? newStr.replace(/\t+/g, (tabs) => {
        return tabs.replace(/./g, newNumOfIndents);
      })
    : newStr;
}
