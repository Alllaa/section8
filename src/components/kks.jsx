import React from "react";
const Form = React.forwardRef(function Form(ref) {
  const nameRef = React.useRef();
  const emailRef = React.useRef();

  React.useImperativeHandle(ref, () => {
    return {
      clear() {
        nameRef.current.value = "";
        emailRef.current.value = "";
      },
    };
  });

  return (
    <form>
      <p>
        <label>Name</label>
        <input ref={nameRef} type="text" />
      </p>

      <p>
        <label>Email</label>
        <input ref={emailRef} type="email" />
      </p>
      <p id="actions">
        <button>Save</button>
      </p>
    </form>
  );
});
export default Form;
