import React, { useState } from 'react';
import EditModal from './EditModal';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // ...

  return (
    <div>
      {users.map((user) => (
        <div key={user.id} className="user-card">
          <div className="card-footer">
            <button className="button edit-button" onClick={openModal}>
              <i className="fas fa-edit"></i> Edit
            </button>
          </div>
        </div>
      ))}
      {isModalOpen && <EditModal closeModal={closeModal} />}
    </div>
  );
};

export default UserList;
