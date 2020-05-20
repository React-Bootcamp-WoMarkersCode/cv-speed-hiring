import React, { useState, useEffect } from 'react';
import './AccessCode.css';
import { useParams } from 'react-router';
import { useHistory } from 'react-router-dom';

const AccessCodeRegister = (props) => {
    const inputs = Array.from({length: 6}, (_, i) => i);
    const { codigo } = props;
    const [typedCode, setTypedCode] = useState([]);
    const [error,setError] = useState({showErro: false, msg: ''});
    const { eventoId } = useParams();
    const [evento] = useState({});
    const history = useHistory();

    const setInput = (el) => {
        if(el) {
            const index = el.name;
            inputs[index] = el;
        }
    }

    const handleInput = (e) => {
        const {name, value} = e.target
        const index = parseInt(name, 10);
        const nextIndex = index + 1;
        
        setTypedCode(state => {
            const copyObj = Object.assign([], state);
            copyObj[index] = value;

            return copyObj;
        });

        if(nextIndex !== inputs.length) {
            inputs[nextIndex].removeAttribute('disabled');
            inputs[nextIndex].focus();
        }
    };
    
    useEffect(() => {
        
        const checkCodeAcess = async () => {
            const typedCodeString = typedCode.join('');

            if(typedCodeString === codigo.toString()) {
                history.push("../cadastrar-participante");
                if(error.showErro) {
                    setError({showErro: false, msg: ''});
                }
            } else {
                setTypedCode([]);
                setError({showErro: true, msg: 'Por favor, digite o código de registro fornecido no evento.'});

                inputs.forEach((item, i) => {
                    item.value = '';
                    if(i !== 0) {
                        item.setAttribute('disabled', 'true');
                    }
                });
            }
        }

        if(typedCode.length === 6) {
            checkCodeAcess();
        }

    }, [typedCode, inputs, error, props, codigo, eventoId, history]);

    return(
        <>
            <div className="box-access-code bg-light p-4 mt-5 text-center">
                <h3 className="h3 font-weight-bold">Participou deste evento? Se cadastre como participante!</h3>
                <p className="mt-2 text-info-card">Por favor insira o código fornecido no evento</p>
                <form className="mt-4 mb-4 form-access-code" onSubmit={e => e.preventDefault()}>
                    {inputs.map((input, index) => {
                        return(
                            <input 
                            type="text" 
                            className="form-control--block"
                            key={index} 
                            name={index} 
                            ref={setInput}
                            disabled={index === 0 ? false : true}                                
                            onChange={handleInput} />
                            )
                        })
                    }
                </form>
                {error.showErro && <p className="error-input mb-4">{error.msg}</p>}
            </div>
        </>
    )
}

export default AccessCodeRegister;