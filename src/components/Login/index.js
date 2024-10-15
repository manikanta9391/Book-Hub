import {useState} from 'react'
import './index.css'
const Login = () => {
  const [userName, setUserName] = useState('')
  const [passwordValue, setPasswordValue] = useState('')
  const [errMsg, setErrMsg] = useState('')
  const changeUserName = event => {
    setUserName(event.target.value)
  }
  const changePassword = event => {
    setPasswordValue(event.target.value)
  }
  const onSubmitForm = async event => {
    event.preventDefault()
    const details = {
      username: userName,
      password: passwordValue,
    }
    const options = {
      method: 'post',
      body: JSON.stringify(details),
    }
    const reponse = await fetch('https://apis.ccbp.in/login', options)
    const data = await reponse.json()
    if (reponse.ok === true) {
      console.log(data.jwt_token)
      setErrMsg('')
    } else {
      setErrMsg(data.error_msg)
    }
    setPasswordValue('')
    setUserName('')
  }
  return (
    <div className="main-container">
      <img
        src="https://res.cloudinary.com/dnzmiwq09/image/upload/v1729011276/f1anhown7rnm4qndnup6.png"
        alt="image"
        className="img-login"
      />
      <div className="inner-container">
        <div className="logo-container">
          <img
            src="https://res.cloudinary.com/dnzmiwq09/image/upload/v1729012373/pswb9yt4bwbz0ujkjnbl.png"
            alt="logo"
            className="book-login"
          />
          <p className="logo-login">ook Hub</p>
        </div>
        <form onSubmit={onSubmitForm}>
          <label htmlFor="Username" className="label-login">
            Username*
          </label>
          <br />
          <input
            type="text"
            id="Username"
            value={userName}
            onChange={changeUserName}
            className="input-login input"
          />
          <br />
          <label htmlFor="password" className="label-login password">
            Password*
          </label>
          <br />
          <input
            type="password"
            id="password"
            value={passwordValue}
            onChange={changePassword}
            className="input-login "
          />
          <br />
          <p className="err-login">{errMsg}</p>
          <button type="submit" className="button-login">
            Login
          </button>
        </form>
      </div>
    </div>
  )
}
export default Login
