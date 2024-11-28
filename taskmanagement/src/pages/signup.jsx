import React,{useState} from 'react'
import '../Assests/style/signup.css'
import banner from '../Assests/images/img-2.webp'


function Signup() {
    const [isLogin, setIsLogin] = useState(true);  // Toggle between login and signup

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (isLogin) {
        // Handle login logic
      } else {
        // Handle signup logic
      }
    };


    return(
        <>
<div className="auth-container">
  <div className="auth-box">
    {/* Task management illustration */}
    <img
      src={banner}
      alt="Task Management"
      className="auth-image"
    />
    <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
    <form onSubmit={handleSubmit}>
      <div className="input-group">
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
      </div>

      {/* <div className="input-group">
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
        />
      </div> */}

      {/* {!isLogin && (
        <div className="input-group">
          <label>Confirm Password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm your password"
          />
        </div>
      )} */}
 {!isLogin && (
  <div className="policy-section">
    <input 
      type="checkbox" 
      id="policy" 
     
      required 
    />
    <label htmlFor="policy">
      By signing up, I accept the 
      <a href="#" target="_blank" rel="noopener noreferrer"> Atlassian Cloud Terms of Service</a> 
      and acknowledge the 
      <a href="#" target="_blank" rel="noopener noreferrer"> Privacy Policy</a>.
    </label>
  </div>
)}

      <button type="submit" className="btn">
        {isLogin ? 'Login' : 'Sign Up'}
      </button>
    </form>

    <p className="toggle-form">
      {isLogin ? (
        <>
          Don't have an account?{' '}
          <span className="link" onClick={() => setIsLogin(false)}>
            Sign Up
          </span>
        </>
      ) : (
        <>
          Already have an account?{' '}
          <span className="link" onClick={() => setIsLogin(true)}>
            Login
          </span>
        </>
      )}
    </p>
  </div>
</div>

        </>
    )
    

}


export default Signup


