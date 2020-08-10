import React from 'react';

function Semester_Courses(props) {
    return (
        <div>
            <h3>Semester: {props.semNum}</h3>
            <div> 1.First Course is ({props.course1})</div>
            <div>2.Second Course is ({props.course2})</div>
            <div>3.Third Course is ({props.course3})</div>
            <div>4.Fourth Course is ({props.course4})</div>
            <div>5.Fifth Course is ({props.course5})</div>
            <div>6.Sixth Course is ({props.course6})</div>
        </div>
    );
}

export default Semester_Courses;