import React from 'react';
import Layout from '../layout';


const LoginPage = () => {
 return (
   <Layout>
     <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh', background: '#f0f0f0' }}>
       <div style={{ textAlign: 'center', border: '1px solid #ccc', padding: '20px', borderRadius: '8px', background: '#fff' }}>
         <h2>Login</h2>
         <input type="text" placeholder="Username" style={{ margin: '10px', padding: '8px', width: '200px' }} />
         <div>
           <a href="/components/MyPieChart">
           <button style={{ margin: '5px', padding: '8px 16px', borderRadius: '4px', border: 'none', background: '#007bff', color: '#fff' }}>Sign In</button>
           </a>
           <a href="/components/MyPieChart">
           <button style={{ margin: '5px', padding: '8px 16px', borderRadius: '4px', border: 'none', background: '#28a745', color: '#fff' }}>Sign Up</button>
           </a>
         </div>
       </div>
     </div>
   </Layout>
 );
};


export default LoginPage;
