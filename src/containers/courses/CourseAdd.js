import React, { useState, useEffect } from "react";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import axios from "axios";

import { courseSubject } from "../../helpers/notifiers";

const CourseAdd = (props) => {
  const [course, setCourse] = useState({ title: "", plan: "" });

  useEffect(() => {
    console.log("Rendering...");
  });

  const saveCourse = () => {
    axios.post("/api/courses", course).then((result) => {
      setCourse({ title: "", plan: "" });
      courseSubject.next({ added: true });
      props.history.push("/course/list");
    });
  };

  return (
    <div>
      <h2>New Course</h2>
      <div className="form-group">
        <label>Title</label>
        <input
          type="text"
          className="form-control"
          value={course.title}
          onChange={(e) => setCourse({ ...course, title: e.target.value })}
        ></input>
      </div>
      <div className="form-group">
        <label>Overview</label>
        <CKEditor
          editor={ClassicEditor}
          data={course.plan}
          onChange={(event, editor) => {
            const data = editor.getData();
            setCourse({ ...course, plan: data });
          }}
        />
      </div>
      <div className="form-group">
        <label>Thumbnail Image</label>
        <input type="file" className="form-control"></input>
      </div>
      <button type="button" className="btn btn-primary" onClick={saveCourse}>
        Add
      </button>
    </div>
  );
};

export default CourseAdd;
