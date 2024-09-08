import "./report.css";
import { Button } from "react-bootstrap";
const Report = () => {
  return (
    <div className="report">
      <h1>Report</h1>
      <form>
        <div className="labelgroup">
          <label>Issue</label>
          <select name="issue" id="issue-select">
            <option value="">--Please choose an option--</option>
            <option value="weeds">Invasive weeds</option>
            <option value="pests">Pests</option>
            <option value="damage">Damage</option>
            <option value="vandalism">Vandalism</option>
          </select>
        </div>

        <div className="labelgroup">
          <label>Details</label>
          <textarea placeholder="Extra details"></textarea>
        </div>

        <Button>Submit</Button>
      </form>
    </div>
  );
};

export default Report;
