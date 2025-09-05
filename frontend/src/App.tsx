import React, { useEffect, useState } from "react";
import { api } from "./api";

interface User {
  id: number;
  name: string;
  email: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const res = await api.get("/users");
    setUsers(res.data);
  };

  const addUser = async () => {
    await api.post("/users", { name, email });
    setName("");
    setEmail("");
    fetchUsers();
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Usuarios</h1>
      <input placeholder="Nombre" value={name} onChange={e => setName(e.target.value)} />
      <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <button onClick={addUser}>Agregar</button>

      <ul>
        {users.map(u => (
          <li key={u.id}>{u.name} - {u.email}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
