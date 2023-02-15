import { useRef } from "react";
function NewUserForm({}) {
  const emailInput = useRef()
  const passwordInput = useRef()
  const selectedRole = useRef()
  const confirmPassword = useRef()
  const onSubmit=async (e) => {
    e.preventDefault();
    if(
      !emailInput.current.value 
      || !passwordInput.current.value 
      || !selectedRole.current.value 
      || confirmPassword.current.value!== passwordInput.current.value 
      ) {
        console.log('invalid')
      }
      const res = fetch('http://localhost:8080/', {
          method: 'POST', // *GET, POST, PUT, DELETE, etc.
          headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: JSON.stringify({email: emailInput.current.value, password: passwordInput.current.value, selectedRole: selectedRole.current.value})
      })
      

  }
  return (
      <>
        <h3>Create new user</h3>
        <form onSubmit={onSubmit} className={"create_user_form"}>
          <label htmlFor="email_input">Email</label>
          <input ref={emailInput} placeholder={"email"} id={"email_input"}/>
          <br/>
          <label htmlFor="password_input">Password</label>
          <input ref={passwordInput} placeholder={"password"} id={"password_input"}/>
          <br/>
          <label htmlFor="confirmed_password_input">Confirm password</label>
          <input ref={confirmPassword} placeholder={"confirm password"} id={"confirmed_password_input"}/>
          <br/>
          <label htmlFor="type_input">Type of User</label>
          <select ref={selectedRole} placeholder={"user"} id={"type_input"}>
            <option value={"user"}>User</option>
            <option value={"admin"}>Admin</option>
          </select>
          <br/>
          <input type={'submit'}/>
        </form>
      </>
  )
}

export default NewUserForm;