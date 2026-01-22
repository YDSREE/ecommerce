import React, {useState} from 'react'

export default function Login() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleRegister(e) {
    e.preventDefault();
    // console.log(e);
    let newuser = { userName, password, email };
    console.log(newuser);
    setUserName("");
    setPassword("");
    setEmail("");
  }
  return (

    <div className='container mt-3'>
      <div className='row'>
        <form className='col-12 col-md-6'>
          <h2>Login</h2>
          <div className='mb-3'>
            <label htmlFor="email" className='form-label'>Email</label>
            <input type="email" className='form-control' id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className='mb-3'>
            <label htmlFor="email" className='form-label'>Username</label>
            <input type="email" className='form-control' id="email" value={email} onChange={(e) => setUserName(e.target.value)} />
          </div>
          <div className='mb-3'>
            <label htmlFor="password" className='form-label'>Password</label>
            <input type="password" className='form-control' id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button type="submit" className='btn btn-primary'>Login</button>
        </form>
      </div>
    </div>
  )
}
