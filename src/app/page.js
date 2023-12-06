import React from 'react';
import Layout from './layout';
import styles from './page.module.css';
import MyPieChart from './components/MyPieChart';

const AppPage = () => {
 return (
   <Layout>
     <div className={styles.container}>
       <h1>Welcome to SUPER TRACKER!</h1>
       <h2>Your journey to a healthier, more active lifestyle starts here.</h2>
       <ul>
         <li>🏃‍♂️ Track your fitness activities.</li>
         <li>📊 Analyze your progress with personalized reports.</li>
         <li>🥇 Set goals and smash them.</li>
       </ul>
       <div>
         <a href="/login">Sign Up or Sign In</a>
         <p style={{ display: 'inline' }}>
           to Join our community today and start your transformation.
         </p>
       </div>
       <div>
        <MyPieChart/>
       </div>
     </div>
   </Layout>
 );
};

export default AppPage;
