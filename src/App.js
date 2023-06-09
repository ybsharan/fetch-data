import { useEffect, useState } from 'react';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch('https://reqres.in/api/users')
      .then((response) => response.json())
      .then((json) => setUsers(json.data)) // Update this line
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className='App'>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <h1>Users</h1>
          <h2>Fetching Data from API in table from this link 'https://reqres.in/api/users'</h2>
          <table border={1}>
            <tbody>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>avatar</th>
              </tr>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>
                    {user.first_name} {user.last_name}
                  </td>
                  <td>{user.email}</td>
                  <td>{user.avatar}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}

export default App;
