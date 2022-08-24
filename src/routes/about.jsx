import React from 'react';

const About = () => {

    const instructions_list = ["On the register page you can add new employees",
    "On the projects page you can see the current projects of the company and you can also add some",
    "The database monitors contains information about the employees",
    "On the management page you can modify or delete employees"]

    return (  
        <div>
             <h1>Intructions</h1>
            <ul>
                {instructions_list.map((instruction,index) => {return <li key={index}>{instruction}</li>})}
            </ul>
        </div>
    );
}
 
export default About;