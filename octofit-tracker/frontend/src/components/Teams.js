import React, { useEffect, useState } from 'react';


function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch('https://scaling-broccoli-97xgxrqgqrx6fxv6g-8000.app.github.dev/api/teams/')
      .then(response => response.json())
      .then(data => setTeams(data))
      .catch(error => console.error('Error fetching teams:', error));
  }, []);

  return (
    <div className="container mt-4">
      <div className="card shadow">
        <div className="card-body">
          <h2 className="card-title mb-4 text-info">Teams</h2>
          <table className="table table-striped table-hover">
            <thead className="thead-dark">
              <tr>
                <th>Name</th>
                <th>Members</th>
              </tr>
            </thead>
            <tbody>
              {teams.map(team => (
                <tr key={team._id}>
                  <td>{team.name}</td>
                  <td>{Array.isArray(team.members) ? team.members.join(', ') : ''}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Teams;
