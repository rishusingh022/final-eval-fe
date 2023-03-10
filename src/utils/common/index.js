const extractFormNameAndIdFromData = (data) => {
  const formNameAndId = {};
  data.forEach((form) => {
    formNameAndId[form.formName] = form.id;
  });
  return formNameAndId;
};

module.exports = {
  extractFormNameAndIdFromData,
};
