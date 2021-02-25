import React from 'react';

const CourseList = (props) => {

    return <div className="container">
        <div className="row">
        {
            props.courses.map(c => <div className="card col-sm-12 col-md-4 p-2" key={c.id}>
                <img src="https://picsum.photos/id/237/300/200" className="card-img-top resize" alt="..."></img>
                <div className="card-body my-2 p-0">
                <h4>{c.title}</h4>
                <button type="button" className="btn-sm btn-primary" onClick={()=>props.removeCourse(c.id)}>Delete</button>
            </div>
            </div>)
        }
        </div>
    </div>
}

export default CourseList;