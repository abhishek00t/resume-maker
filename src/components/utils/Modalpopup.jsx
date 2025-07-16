import CloseIcon from "@mui/icons-material/Close";
import "./Modalpopup.css";

export const Modalpopup = ({ warning, setPopup, showPopup }) => {
  const closeIcon = () => {
    setPopup(false);
  };
  return (
    <div className="modalpopup">
      <div className="content">
        <button onClick={closeIcon} className="button">
          <CloseIcon />
        </button>
        <p className="popup">{warning}</p>
      </div>
    </div>
  );
};
