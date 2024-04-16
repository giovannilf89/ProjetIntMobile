import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import apiLocal from '../../API/apiLocal/api';

export default function CriarDentista() {
    const navigation = useNavigate();
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const Cadastro = async (e) => {
        e.preventDefault();
        if (!nome || !email || !senha) {
            toast.warn('Existem campos em branco');
            return;
        }

        try {
            await apiLocal.post('/CriarDentista', {
                nome,
                email,
                senha
            });
            toast.success('Dentista cadastrado com sucesso');
            navigation('/Dashboard');
        } catch (err) {
            toast.error(err.response.data.error);
        }
    };

    return (
        <div className='cdcontainer'> 
            <div>
                <h1 className="tituloh1">Cadastro Dentista</h1>
            </div>
            <div className='cdcentral'>
                <form onSubmit={Cadastro}>
                    <label className="label">Nome:</label>
                    <input 
                    className='inputF'
                        type="text"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    />
                    <br />
                    <label className="label">Email:</label>
                    <input
                    className='inputF'
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <br />
                    <label className="label">Senha:</label>
                    <input
                    className='inputF'
                        type="text"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                    />
                    <br />
                    <div className='cdbtn'>
                    <button className='btnenviar' type="submit">Enviar</button>
                    </div>
                </form>
            </div>
            <button className='btnvoltar' onClick={() => navigation('/Dashboard')}>Voltar</button>
        </div>
    );
}
