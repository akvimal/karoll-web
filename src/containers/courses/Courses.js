import React from 'react';
import axios from 'axios';
import {Router,Route,Link} from 'react-router-dom';

import { history } from '../../helpers/history';
import {courseSubject} from '../../helpers/notifiers';
import CourseList from './CourseList';
import CourseAdd from './CourseAdd';

export class Courses extends React.Component {

    state = {
        courses: [],
        refresh: false
    }

    courseNotifier = courseSubject.asObservable();

    constructor(props){
        super(props);
    }

    fetchCourses() {
        axios.get('/api/courses').then(result => {
            this.setState({courses:result.data});
        })
    }

    componentDidMount() {
       this.fetchCourses();
       this.courseNotifier.subscribe(data => {
           //console.log('ADDED',data);
           if(data && data.added)
            this.fetchCourses();
       })
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.refresh !== this.state.refresh){
            this.fetchCourses();
            this.setState({refresh:false});
        }
    }
    
    deleteCourse(id) {
        axios.delete(`/api/courses/${id}`)
            .then( result => {
                if(result.data.deleted) 
                    this.setState({refresh:true});
            })
    }

    render(){
        return <Router history={history}>
            <div className="container">
                <div className="row">
                    <div className="col-12 d-inline-flex p-2 bd-highlight justify-content-between">
                        <h4>Courses</h4>
                        <Link to="/course/list">List</Link>
                        <button type="button" onClick={()=>history.push('/course/add')} className="btn-sm btn-primary">New Course</button>
                    </div>
                    <div className="col-12 p-3 mb-2 bg-light text-dark">
                        {/* <CourseList courses={this.state.courses}></CourseList> */}
                        {/* <CourseAdd></CourseAdd> */}
                        <Route path="/course/list" component={()=><CourseList courses={this.state.courses} removeCourse={(id)=>this.deleteCourse(id)}></CourseList>}/>
                        <Route path="/course/add" component={CourseAdd}/>
                    </div>
                </div>
            </div>
        </Router>
    }
}