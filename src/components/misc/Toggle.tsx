import "./toggle.css";

export const Toggle = ({ handleChange, isChecked, styling, newID }) => {
    return (<><div className="darkmode-toggle-container" id={newID} style={styling}>
        <input type="checkbox" className="sr-only" id="darkmode-toggle" onChange={handleChange} checked={isChecked} />
        <label htmlFor="darkmode-toggle" className="toggle">
            <span>Toggle dark mode</span>
        </label>
    </div></>);
};