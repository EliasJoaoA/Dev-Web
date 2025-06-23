import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../service/api';

function UserForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!name || !email) {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        const newUser = { name, email };

        try {
            await api.post('/users', newUser);
            alert('Usuário cadastrado com sucesso!');
            navigate('/'); //redirect lista de users
        } catch (error) {
            console.error("Erro ao cadastrar usuário:", error);
            alert('Ocorreu um erro ao cadastrar.');
        }
    };

    return (
        <div className="container">
            <h1>Cadastrar Novo Usuário</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Nome:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Digite o nome"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Digite o e-mail"
                    />
                </div>
                <button type="submit">Salvar</button>
            </form>
        </div>
    );
}

export default UserForm;