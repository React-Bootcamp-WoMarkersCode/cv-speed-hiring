import React from 'react';
import {
    Button, 
    Card,
    Form,
    Input,
    InputGroupText 
} from 'reactstrap';

import './AccessCode.css';

const AccessCode = () => {
    return(
        <>
            <Card className="bg-light p-4 mt-4 text-center">
                <h3 className="h3 font-weight-bold">Para visualizar os participantes do evento</h3>
                <p className="mt-2 text-info-card">Por favor insira o código recebido por e-mail</p>
                <Form className="mt-4 mb-4 form-access-code" onSubmit={e => e.preventDefault()}>
                    <InputGroupText className="d-flex justify-content-around">
                        <Input type="text" name="password-0" id="password-0" className="form-control--block" />
                        <Input type="text" name="password-1" id="password-1" className="form-control--block" />
                        <Input type="text" name="password-2" id="password-2" className="form-control--block" />
                        <Input type="text" name="password-3" id="password-3" className="form-control--block" />
                        <Input type="text" name="password-4" id="password-4" className="form-control--block" />
                        <Input type="text" name="password-5" id="password-5" className="form-control--block" />
                    </InputGroupText>
                    <Button className="form-access-code--btn" size="lg" disabled>enviar</Button>
                </Form>
                <p className="m-0">Não possui o código? <a href="/solicitar-chave-acesso" title="Solicitar código de acesso" className="link-info-card">Solicitar código de acesso</a></p>
            </Card>
        </>
    )
}

export default AccessCode;