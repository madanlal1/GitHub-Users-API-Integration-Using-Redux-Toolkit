import React from "react";

const DataModal = ({ user, closeModal }) => {
  if (!user) return null; // Handle the case when no user is selected

  return (
    <div
      className="modal"
      tabIndex="-1"
      role="dialog"
      style={{ display: "block" }}
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">User Info</h5>
            <button type="button" className="close" onClick={closeModal}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <p>User ID: {user.id}</p> {/* Example of displaying user data */}
            <p>FullName: {user.login}</p>{" "}
            {/* Example of displaying user data */}
            <p>Followers: {Math.floor(Math.random() * 100)}</p>
            <p>Following: {Math.floor(Math.random() * 100)}</p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataModal;
