function Feedback() {
  return (
    <div>
      <form id="recommendation-form">
        <input
          type="text"
          id="new-recommendation"
          placeholder="Write your recommendation..."
          required
        />
        <button type="submit">Submit</button>
      </form>
      <hr />
    </div>
  );
}
export default Feedback;
