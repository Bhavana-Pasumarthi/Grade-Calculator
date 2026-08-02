import { useState } from "react";
import { SUBJECT_TYPES } from "./utils/constants";
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
  type: SUBJECT_TYPES.THEORY,

  s1: "",
  s2: "",
  le: "",

  finalGrade: "",

  isLab: false,
  parentId: null,
};

    setSubjects((prevSubjects) => [...prevSubjects, newSubject]);
  }

function updateSubject(id, field, value) {
  let updatedSubjects = [...subjects];

  updatedSubjects = updatedSubjects.map((subject) => {
    if (subject.id === id) {
      return {
        ...subject,
        [field]: value,
      };
    }

    return subject;
  });

  // If subject name changes, update the lab name too
  if (field === "subject") {
  updatedSubjects = updatedSubjects.map((subject) => {
    if (subject.parentId === id) {
      return {
        ...subject,
        subject: value ? value + " Lab" : "Lab",
      };
    }

    return subject;
  });
}

  // Handle Type change
  if (field === "type") {
    const parent = updatedSubjects.find((s) => s.id === id);

    if (value === SUBJECT_TYPES.LAB_THEORY) {
      const alreadyExists = updatedSubjects.some(
        (s) => s.parentId === id
      );

      if (!alreadyExists) {
        updatedSubjects.push({
          id: Date.now() + Math.random(),

          subject: parent.subject
            ? parent.subject + " Lab"
            : "Lab",

          credits: 0,

          type: SUBJECT_TYPES.LAB,

          s1: "",
          s2: "",
          le: "",

          finalGrade: "",

          isLab: true,

          parentId: id,
        });
      }
    }

    if (value === SUBJECT_TYPES.THEORY) {
      updatedSubjects = updatedSubjects.filter(
        (subject) => subject.parentId !== id
      );
    }
  }

  setSubjects(updatedSubjects);
}

  function deleteSubject(id) {
  setSubjects(
    subjects.filter(
      (subject) =>
        subject.id !== id &&
        subject.parentId !== id
    )
  );
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