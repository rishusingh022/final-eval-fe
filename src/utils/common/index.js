const extractFormNameAndIdFromData = (data) => {
  const formNameAndId = {};
  data.forEach((form) => {
    formNameAndId[form.formName] = form.id;
  });
  return formNameAndId;
};

const extractFieldNamesFromData = (data, id) => {
  const fieldNames = [];
  data.forEach((form) => {
    if (form.id === id) {
      fieldNames.push(...form.formFields);
    }
  });
  return fieldNames;
};

module.exports = {
  extractFormNameAndIdFromData,
  extractFieldNamesFromData,
};
