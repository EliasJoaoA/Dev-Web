import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../service/api';

function UserList() {
    const [users, setUsers] = useState([]);

    // loadUser
    const fetchUsers = async () => {
        try {
            const response = await api.get('/users');
            setUsers(response.data);
        } catch (error) {
            console.error("Erro ao buscar usuários:", error);
        }
    };


    useEffect(() => {
        fetchUsers();
    }, []);

    //delete
    const handleDelete = async (id) => {
        if (window.confirm("Tem certeza que deseja deletar este usuário?")) {
            try {
                await api.delete(`/users/${id}`);
                //att lista d users removendo deletadossda
                setUsers(users.filter(user => user.id !== id));
            } catch (error) {
                console.error("Erro ao deletar usuário:", error);
            }
        }
    };

    return (
        <div className="container">
            <h1>Lista de Usuários</h1>
            <Link to="/add" className="btn-add">Adicionar Novo Usuário</Link>
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td className="actions">
                                {/* Opcional: Link para editar */}
                                {/* <Link to={`/edit/${user.id}`}>Editar</Link> */}
                                <button onClick={() => handleDelete(user.id)}>Deletar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default UserList;