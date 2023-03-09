const extractFormNameFromData = (data) => {
  const formNames = [];
  data.forEach((item) => {
    formNames.push(item.formName);
  });
  return formNames;
};

module.exports = {
  extractFormNameFromData,
};
