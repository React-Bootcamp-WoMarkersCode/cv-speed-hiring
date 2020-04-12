import React from 'react';
import DadosParticipante from './DadosParticipante'
import ResumoProfissional from './ResumoProfissional';
import Objetivo from './Objetivo'
import Habilidades from './Habilidades'
import ExperienciaProfissional from './ExperienciaProfissional'
import FormacaoAcademica from './FormacaoAcademica';

const ListaInfoCurriculo = (props) => {

    const { participante, resumoProfissional, objetivo, habilidades, experiencia, formacao } = props;

    // const experiencias = experiencia.map((e) =>
    //     <ExperienciaProfissional
    //         cargo={e.cargo}
    //         dataInicio={e.dataInicio}
    //         dataFim={e.dataFim}
    //         atual={e.atual}
    //     />
    // );

    return (
        <main className="principal">
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
            <ResumoProfissional resumoProfissional={resumoProfissional} />

            <Objetivo objetivo={objetivo} />

            <Habilidades habilidades={habilidades} />

            <ExperienciaProfissional
                cargo={experiencia.cargo}
                empresa={experiencia.empresa}
                dataInicio={experiencia.dataInicio}
                dataFim={experiencia.dataFim}
                atual={experiencia.atual}
            />

            <FormacaoAcademica
                curso={formacao.curso}
                instituicao={formacao.instituicao}
                dataInicio={experiencia.dataInicio}
                dataFim={experiencia.dataFim}
            />
        </main>
    );
}

export default ListaInfoCurriculo;