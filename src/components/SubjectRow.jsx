import { GRADES, SUBJECT_TYPES } from "../utils/constants";

function SubjectRow({ subject, index, updateSubject, deleteSubject }) {
  return (
    <tr>
      <td>{index + 1}</td>

      <td>
        <input
          type="text"
          value={subject.subject}
          disabled={subject.isLab}
          placeholder="Subject Name"
          onChange={(e) =>
            updateSubject(subject.id, "subject", e.target.value)
          }
        />
      </td>

      <td>
        <input
          type="number"
          value={subject.credits}
          disabled={subject.isLab}
          onChange={(e) =>
            updateSubject(subject.id, "credits", e.target.value)
          }
        />
      </td>

      <td>
        <select
          value={subject.type}
          disabled={subject.isLab}
          onChange={(e) =>
            updateSubject(subject.id, "type", e.target.value)
          }
        >
          <option value={SUBJECT_TYPES.THEORY}>Theory</option>
          <option value={SUBJECT_TYPES.LAB_THEORY}>Lab + Theory</option>
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
          disabled={subject.isLab}
          onClick={() => deleteSubject(subject.id)}
        >
          🗑
        </button>
      </td>
    </tr>
  );
}

export default SubjectRow;