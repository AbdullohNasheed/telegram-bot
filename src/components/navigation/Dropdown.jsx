import "../../pages/Dashboard/Pages/News/steyle.css"
import { useState } from "react"

function Dropdown({ selected, setSelected, }) {
    const [isActive, setIsActive] = useState(false)
    const options = ["React", "Vue", "Angular"];
    return (
        <div className="dropdown">
            <div className="dropdown-btn" onClick={(e) =>
                setIsActive(!isActive)}>
                {selected === -1 ? "Choose One" : options[selected]}
                <i class='bx bxs-down-arrow'></i>
            </div>
            {isActive && (
                <div className="dropdown-content">
                    <div
                        onClick={() => {
                            setSelected(-1)
                            setIsActive(false)
                        }}
                        className="dropdown-item"
                    >
                        None
                    </div>
                    {options.map((option, i) => (
                        <div
                            onClick={() => {
                                setSelected(i)
                                setIsActive(false)
                            }}
                            className="dropdown-item"
                        >
                            {option}
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Dropdown;