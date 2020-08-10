import React from 'react';
import './App.css';
// import SAIF from './test1';
import SemCourses from './semCourses';
import GPA from './gpa';

function App() {
  return (
    // <div>
    //   {/* <h1>Hi Buddies</h1>
    //   <h4>Say Some thing!</h4> */}
    // </div>
    // <SAIF />

    <div>
      <h1>Department of Computer Science</h1>
      <SemCourses semNum="5th" course1="NDC" course2="AI" course3="CC" course4="OB" course5="NA" course6="CA" />
      <GPA gpa="2.54"/>
    </div>

  );
}

export default App;
