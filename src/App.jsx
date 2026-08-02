import { useState } from "react";

import "./App.css";

import Header from "./components/Header";
import GradeTable from "./components/GradeTable";
import ActionButtons from "./components/ActionButtons";
import ResultCard from "./components/ResultCard";

function App() {
  const [subjects, setSubjects] = useState([]);

  function addSubject() {
    const newSubject = {
      id: Date.now(),
      subject: "",
      credits: "",
      type: "Theory",
      s1: "",
      s2: "",
      le: "",
      finalGrade: "",
    };

    setSubjects([...subjects, newSubject]);
  }

  function updateSubject(id, field, value) {
    setSubjects(
      subjects.map((subject) =>
        subject.id === id
          ? { ...subject, [field]: value }
          : subject
      )
    );
  }

  function deleteSubject(id) {
    setSubjects(subjects.filter((subject) => subject.id !== id));
  }

  return (
    <div className="app">
      <Header />

      <GradeTable
        subjects={subjects}
        updateSubject={updateSubject}
        deleteSubject={deleteSubject}
      />

      <ActionButtons addSubject={addSubject} />

      <ResultCard />
    </div>
  );
}

export default App;