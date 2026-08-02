import SubjectRow from "./SubjectRow";
function GradeTable({ subjects, updateSubject, deleteSubject }) {
  return (
    <div className="table-container">
      <table className="grade-table">
        <thead>
          <tr>
            <th>SN</th>
            <th>Subject</th>
            <th>Credits</th>
            <th>Type</th>
            <th>S1</th>
            <th>S2</th>
            <th>LE</th>
            <th>Final Grade</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {subjects.length === 0 ? (
            <tr>
              <td colSpan="9" className="empty-row">
                No subjects added yet.
              </td>
            </tr>
          ) : (
            subjects.map((subject, index) => (
              <tr key={subject.id}>
                <td>{index + 1}</td>

                <td>
                  <input
  type="text"
  value={subject.subject}
  onChange={(e) =>
    updateSubject(subject.id, "subject", e.target.value)
  }
  placeholder="Subject Name"
  disabled={subject.isLab}
/>
                </td>

                <td>
                  <input
  type="number"
  value={subject.credits}
  onChange={(e) =>
    updateSubject(subject.id, "credits", e.target.value)
  }
  disabled={subject.isLab}
/>
                </td>

                <td>
                  <select
  value={subject.type}
  onChange={(e) =>
    updateSubject(subject.id, "type", e.target.value)
  }
  disabled={subject.isLab}
>
  <option value={SUBJECT_TYPES.THEORY}>
    {SUBJECT_TYPES.THEORY}
  </option>

  <option value={SUBJECT_TYPES.LAB_THEORY}>
    {SUBJECT_TYPES.LAB_THEORY}
  </option>
</select>
                </td>

                <td>
                  <select
  value={subject.s1}
  onChange={(e) =>
    updateSubject(subject.id, "s1", e.target.value)
  }
>
  {GRADES.map((grade) => (
  <option key={grade} value={grade}>
    {grade === "" ? "Select" : grade}
  </option>
))}
</select>
                </td>

                <td>
                  <select
  value={subject.s2}
  onChange={(e) =>
    updateSubject(subject.id, "s2", e.target.value)
  }
>
  
  {GRADES.map((grade) => (
  <option key={grade} value={grade}>
    {grade === "" ? "Select" : grade}
  </option>
))}
</select>
                </td>

                <td>
                  <select
  value={subject.le}
  onChange={(e) =>
    updateSubject(subject.id, "le", e.target.value)
  }
>
  {GRADES.map((grade) => (
  <option key={grade} value={grade}>
    {grade === "" ? "Select" : grade}
  </option>
))}
</select>
                </td>

                <td>{subject.finalGrade || "-"}</td>

                <td>
                  <button
  className="delete-btn"
  onClick={() => deleteSubject(subject.id)}
  disabled={subject.isLab}
>
                    🗑
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default GradeTable;