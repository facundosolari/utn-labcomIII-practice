import Form from 'react-bootstrap/Form';
import { useState } from 'react';

const Login = () => {
    const [username, setUsername] = useState('');

    const onChangeHandler = (event) => {
        if (username.includes('o') || username.includes('O')) {
            alert('Por favor, ¡Nombres de usuario sin la letra o!');
            setUsername('');
        }
        else {
            setUsername(event.target.value);
        }
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        if (username.includes('o') || username.includes('O') || username == '') {
            alert('Usuario inválido para registrarse');
        }
        else {
            alert('¡Usuario registrado correctamente!');
        }
        setUsername('');
    }

    return (
        <div>
            <div>
                <div>
                    <Form onSubmit={onSubmitHandler}>
                        <Form.Group>
                            <Form.Label> Username </Form.Label>
                            <Form.Control 
                            type="text"
                            onChange={onChangeHandler}
                            value={username}/>
                        </Form.Group>
                        <button type="submit"> Registrarse </button>
                    </Form>
                    <p>{username}</p>
                </div>
            </div>
        </div>
    );
}

export default Login;