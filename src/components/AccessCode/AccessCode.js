import React, { useState, useEffect } from 'react';

import './AccessCode.css';

const AccessCode = (props) => {
    const inputs = Array.from({length: 6}, (_, i) => i);
    const { empresaId } = props;
    const [codeAPI,setCodeAPI] = useState(false);
    const [typedCode, settypedCode] = useState('');
    const [showList, setShowList] = useState(false);
    const [error,setError] = useState({showErro: false, msg: ''});

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

        if(nextIndex !== inputs.length) {
            inputs[nextIndex].removeAttribute('disabled');
            inputs[nextIndex].focus();
        }

        settypedCode((state) => {
            return state.concat(value);
        });
    };

    useEffect(() => {
        
        const fetchData = async (url) => {
            try {
                const data = await fetch(url);
                const json = await data.json();
                
                if(json) {
                    setCodeAPI(json);
                }                
            } catch (error) {
                console.log(error);
            }
        }
        
        const checkCodeAcess = () => {

            if(typedCode.length === 6) {
                const urlCodeEventAPI = `https://speedhiring-8423b.firebaseio.com/empresas/0/${typedCode}.json`;
                
                fetchData(urlCodeEventAPI);

                if(codeAPI) {
                    setShowList(true);
                    props.onChange(showList);
                    localStorage.setItem(`code${empresaId}`, codeAPI);

                    if(error.showErro) {
                        setError({showErro: false, msg: ''});
                    }
                    
                } else {
                    settypedCode('');
                    setError({showErro: true, msg: 'Por favor, digite o código de acesso recebido por e-mail.'});

                    inputs.forEach((item, i) => {
                        item.value = '';
                        if(i !== 0) {
                            item.setAttribute('disabled', 'true');
                        }
                    });
                }
            }
        }

        checkCodeAcess();
        
    }, [typedCode, inputs, showList, error, props, empresaId, codeAPI]);

    return(
        <>
            <div className="box-access-code bg-light p-4 mt-4 text-center">
                <h3 className="h3 font-weight-bold">Para visualizar os participantes do evento</h3>
                <p className="mt-2 text-info-card">Por favor insira o código recebido por e-mail</p>
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
                <p className="m-0">Não possui o código? <a href="/solicitar-chave-acesso" title="Solicitar código de acesso" className="link-info-card">Solicitar código de acesso</a></p>
            </div>
        </>
    )
}

export default AccessCode;