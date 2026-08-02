function GradeTable() {
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
          </tr>
        </thead>

        <tbody>
          <tr>
            <td colSpan="8" className="empty-row">
              No subjects added yet.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default GradeTable;