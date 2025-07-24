const submitBtn = ($, formHandler) => {
  let formProps = {};
  let submitBtn = $("input[type='submit']")[0];
  formHandler.content.actions.submit.content.text = submitBtn.attribs.value;
  formProps = { formProps: { formHandlerProps: formHandler } };
  return formProps;
};

module.exports = {
  submitBtn,
};
