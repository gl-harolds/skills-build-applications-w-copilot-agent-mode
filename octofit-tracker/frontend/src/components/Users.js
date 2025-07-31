import React, { useEffect, useState } from 'react';


function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://scaling-broccoli-97xgxrqgqrx6fxv6g-8000.app.github.dev/api/users/')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  return (
    <div className="container mt-4">
      <div className="card shadow">
        <div className="card-body">
          <h2 className="card-title mb-4 text-secondary">Users</h2>
          <table className="table table-striped table-hover">
            <thead className="thead-dark">
              <tr>
                <th>Username</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user._id}>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Users;
