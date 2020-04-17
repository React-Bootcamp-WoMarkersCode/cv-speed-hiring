import React from 'react';
import DadosParticipante from './DadosParticipante'
import Objetivo from './Objetivo'
import Habilidades from './Habilidades'
import ExperienciaProfissional from './ExperienciaProfissional'
import FormacaoAcademica from './FormacaoAcademica';
import { Container, Row, Col } from 'reactstrap';

const ListaInfoCurriculo = (props) => {

    const { participante, objetivo, habilidades, experiencias, formacao } = props;

     const experienciaList = experiencias.map((e) => 
         <div>
            <ExperienciaProfissional
                cargo={e.cargo}
                empresa={e.empresa}
                dataInicio={e.dataInicio}
                dataFim={e.dataFim}
                atual={e.atual}
            />
         </div>
    )

    const formacaoList = formacao.map((e) =>
        <div>
            <FormacaoAcademica
                curso={e.curso}
                instituicao={e.instituicao}
                dataInicio={e.dataInicio}
                dataFim={e.dataFim}
            />
        </div>
    )

    return (
        <Container>
            <Row className="row-margin-top-cv">
                <Col lg="4" md="8"> 
                    <DadosParticipante
                        nome={participante.nome}
                        cargo={participante.cargo} 
                        telefone={participante.telefone}
                        email={participante.email}
                        linkedin={participante.linkedin}
                        github={participante.github}
                        cidade={participante.cidade}
                        uf={participante.uf}
                        avatar={participante.avatar}
                    />
                </Col> 

                <Col lg="8" md="12" xl="8"> 

                    <Objetivo objetivo={objetivo} />

                    <Habilidades habilidades={habilidades} />

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
