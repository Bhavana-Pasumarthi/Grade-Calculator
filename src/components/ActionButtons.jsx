function ActionButtons({ addSubject }) {
  return (
    <div className="action-buttons">
      <button
        className="add-btn"
        onClick={addSubject}
      >
        + Add Subject
      </button>

      <button className="submit-btn">
        Submit
      </button>
    </div>
  );
}

export default ActionButtons;