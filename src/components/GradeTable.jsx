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
                  />
                </td>

                <td>
                  <input
                    type="number"
                    value={subject.credits}
                    onChange={(e) =>
                      updateSubject(subject.id, "credits", e.target.value)
                    }
                  />
                </td>

                <td>
                  <select
                    value={subject.type}
                    onChange={(e) =>
                      updateSubject(subject.id, "type", e.target.value)
                    }
                  >
                    <option>Theory</option>
                    <option>Lab + Theory</option>
                  </select>
                </td>

                <td>
                  <select
  value={subject.s1}
  onChange={(e) =>
    updateSubject(subject.id, "s1", e.target.value)
  }
>
  <option value="">Select</option>
  <option value="O">O</option>
  <option value="A+">A+</option>
  <option value="A">A</option>
  <option value="B+">B+</option>
  <option value="B">B</option>
  <option value="C">C</option>
  <option value="F">F</option>
  <option value="Ab">Ab</option>
</select>
                </td>

                <td>
                  <select
  value={subject.s1}
  onChange={(e) =>
    updateSubject(subject.id, "s2", e.target.value)
  }
>
  <option value="">Select</option>
  <option value="O">O</option>
  <option value="A+">A+</option>
  <option value="A">A</option>
  <option value="B+">B+</option>
  <option value="B">B</option>
  <option value="C">C</option>
  <option value="F">F</option>
  <option value="Ab">Ab</option>
</select>
                </td>

                <td>
                  <select
  value={subject.s1}
  onChange={(e) =>
    updateSubject(subject.id, "le", e.target.value)
  }
>
  <option value="">Select</option>
  <option value="O">O</option>
  <option value="A+">A+</option>
  <option value="A">A</option>
  <option value="B+">B+</option>
  <option value="B">B</option>
  <option value="C">C</option>
  <option value="F">F</option>
  <option value="Ab">Ab</option>
</select>
                </td>

                <td>{subject.finalGrade || "-"}</td>

                <td>
                  <button
                    className="delete-btn"
                    onClick={() => deleteSubject(subject.id)}
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