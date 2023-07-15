import React from 'react';

function UserDetailsModal({ user }: any) {
  return (
    <div className="modal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{user?.name}</h5>
            <h5 className="modal-title">Riyaj</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div>riyaj</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDetailsModal;