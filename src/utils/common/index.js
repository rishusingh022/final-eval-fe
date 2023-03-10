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

const extractFormName = (data, id) => {
  let formName = '';
  data.forEach((form) => {
    if (form.id === id) {
      formName = form.formName;
    }
  });
  return formName;
};
const extractDataByFormName = (data, formName) => {
  let form = {};
  data.forEach((item) => {
    if (item.formName === formName) {
      form = item;
    }
  });
  return form;
};

const getfirst4KeysFromObjectIfExits = (obj) => {
  const keys = Object.keys(obj);
  const first4Keys = keys.slice(0, 4);
  return first4Keys;
};

module.exports = {
  extractFormNameAndIdFromData,
  extractFieldNamesFromData,
  extractFormName,
  extractDataByFormName,
  getfirst4KeysFromObjectIfExits,
};
