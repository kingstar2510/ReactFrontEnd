import './NewLogin.css';
// import profile from "./../image/a.png";
// import email from "./../image/email.jpg";
// import pass from "./../image/pass.png";
function NewLogin() {
  return (
    <div className="main">
     <div className="sub-main">
       <div>
         <div className="imgs">
           <div className="container-image">
             <img src="./images/group-icon.png" alt="profile" className="profile"/>

           </div>


         </div>
         <div>
           <h1>Login Page</h1>
           <div>
             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxkJcs3vhMVteQO14bZDD5TPlBAA6_bcdFow&usqp=CAU" alt="email" className="email"/>
             <input type="text" placeholder="user name" className="name"/>
           </div>
           <div className="second-input">
             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl4usPf8DNxOd1xzBuvHXtlbfqBL8rAXBtcQ&usqp=CAU" alt="pass" className="email"/>
             <input type="password" placeholder="user password" className="name"/>
           </div>
          <div className="login-button">
          <button>Login</button>
          </div>
           
            <p className="link">
              <a href="#">Forgot password ?</a> Or<a href="#">Sign Up</a>
            </p>
           
 
         </div>
       </div>
       

     </div>
    </div>
  );
}

export default NewLogin;