import React from 'react';
import DadosParticipante from './DadosParticipante'
import Objetivo from './Objetivo'
import Habilidades from './Habilidades'
import ExperienciaProfissional from './ExperienciaProfissional'
import FormacaoAcademica from './FormacaoAcademica';
import { Container, Row, Col } from 'reactstrap';
import MyDoc from './curriculoPDF';

const ListaInfoCurriculo = ({ participante, objetivo, habilidades, experiencias, formacao }) => {

     const experienciaList = experiencias.map((e, index) => 
         <div key={index}>
            <ExperienciaProfissional
                cargo={e.cargo}
                empresa={e.empresa}
                dataInicio={e.dataInicio}
                dataFim={e.dataFim}
                atual={e.atual}
            />
         </div>
    )

    const formacaoList = formacao.map((e, index) =>
        <div key={index}>
            <FormacaoAcademica
                curso={e.curso}
                instituicao={e.instituicao}
                dataInicio={e.dataInicio}
                dataFim={e.dataFim}
            />
        </div>
    )

    const clickDownload = () => {
        MyDoc(objetivo, habilidades, participante, experiencias, formacao)
    };

    return (
        <Container>
            <Row className="row-margin-top-cv">
                <Col lg="4" md="8"> 
                    {DadosParticipante(participante, clickDownload)}
                    />
                </Col> 

                <Col lg="8" md="12"> 

                    {Objetivo(objetivo)}
                    {Habilidades(habilidades)}

                    <div className="experiencia">
                        <h3 className="experiencia-titulo">Experiência Profissional</h3>
                        {experienciaList}
                    </div>

                    <div className="formacao">
                        <h3 className="formacao-titulo">Formação Acadêmica</h3>
                        {formacaoList}
                    </div>
                </Col>
         </Row> 
     </Container>
    );
}

export default ListaInfoCurriculo
