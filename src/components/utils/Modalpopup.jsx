import "./Modalpopup.css";
export const Modalpopup = ({ warning }) => {
  return (
    <div className="modalpopup">
      <div className="content">{warning}</div>
    </div>
  );
};
