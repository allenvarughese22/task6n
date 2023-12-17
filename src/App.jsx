import "./App.css";
import data from "./students.json";
import coursedata from "./courses.json";

function App() {
  return (
    <>
      <div>
        <h1>People List</h1>
        <ul>
          {data.map((person) => (
            <li key={person.id}>
              <p>Name: {person.name}</p>
              <p>Age: {person.age}</p>
              <p>Courses:</p>
              <ul>
                {person.courses.map((courseId) => (
                  <li key={courseId}>{courseId}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h1> course list </h1>
        <ul>
          {coursedata.map((course, index) => (
            <li key={index}>
              <p>Cousrse Name: {course.name}</p>
              <p>Cousrse InstructorName: {course.instructor}</p>
              <p>{course.index}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
