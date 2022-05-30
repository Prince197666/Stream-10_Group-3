const bibtexParse = require('bibtex-parse-js');

const parseBibText = (file) => {
  const jsonData = bibtexParse.toJSON(file);
  return jsonData;
};

export default parseBibText;
