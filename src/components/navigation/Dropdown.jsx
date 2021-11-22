import "../../pages/Dashboard/Pages/News/steyle.css";
import { useState } from "react";

function Dropdown({
  selected = -1,
  setSelected,
  data = [],
  placeholder = "Choose one",
  name = "",
}) {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="dropdown">
      <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
        {selected === -1 ? placeholder : data[selected]}
        <i class="bx bxs-down-arrow"></i>
      </div>
      {isActive && (
        <div className="dropdown-content">
          <div
            onClick={() => {
              setSelected({ value: -1, name });
              setIsActive(false);
            }}
            className="dropdown-item"
          >
            None
          </div>
          {data.map((option, i) => (
            <div
              onClick={() => {
                setSelected({ value: i, name });
                setIsActive(false);
              }}
              className="dropdown-item"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
