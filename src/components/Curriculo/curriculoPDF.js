import jsPDF from "jspdf";

const MyDoc = (objetivo, habilidades, participante, experiencias, formacao) => {
            
    const doc = new jsPDF();
    doc.setTextColor(80);
    doc.setFontSize(15);
    doc.setFontType("bold");
    doc.text(`${participante.nome}`, 10, 20)
    doc.setFontSize(13);
    doc.text(`${participante.cargo}`, 10, 30)
    doc.setFontSize(12);
    doc.setFontType("normal");
    doc.text("Contato:", 10, 45)
    doc.text(`${participante.email}`, 10, 55)
    doc.text(`${participante.telefone}`, 10, 65)
    doc.text(`${participante.cidade} - ${participante.uf}`, 10, 75)
    doc.text(`${participante.linkedin}`, 10, 85)
    doc.text(`${participante.github}`, 10, 95)

    var objetivoTitle = doc.splitTextToSize(`${objetivo}`,  120, 80);
    var habilidadesTitle = doc.splitTextToSize(`${habilidades}`, 120, 110);
    doc.setFontSize(14);
    doc.setFontType("bold");
    doc.text("Objetivo", 80, 20)
    doc.setFontSize(12);
    doc.setFontType("normal");
    doc.text(80, 30, objetivoTitle);
    doc.setFontSize(14);
    doc.setFontType("bold");
    doc.text("Habilidades", 80, 70)
    doc.setFontSize(12);
    doc.setFontType("normal");
    doc.text(80, 80, habilidadesTitle);
    doc.setFontSize(14);
    doc.setFontType("bold");
    doc.text("Experiência", 80, 110)
    
    for(var i = 0; i < experiencias.length; i++){

        const periodo = experiencias[i].atual === "S" ? "Atual" : ""; 

        doc.setFontSize(12);
        doc.setFontType("normal");
        doc.text(experiencias[i].cargo, 80, (120 + (i * 20)))
        doc.text(experiencias[i].empresa, 80, (127 + (i * 20)))
        doc.text(experiencias[i].dataInicio, 150, (127 + (i * 20)))
        doc.text("-", 167, (127 + (i * 20)))
        doc.text(experiencias[i].dataFim, 170, (127 + (i * 20)))
        doc.text(periodo, 170, (127 + (i * 30)))
    }

    doc.setFontSize(14);
    doc.setFontType("bold");
    doc.text("Formação Acadêmica", 80, 190)

    for (let i = 0; i < formacao.length; i++) {

        var instituicao = doc.splitTextToSize(`${formacao[i].instituicao}`, 75, 75);

        doc.setFontSize(12);
        doc.setFontType("normal");
        doc.text(formacao[i].curso, 80, (200 + (i * 25)))
        doc.text(instituicao, 80, (209 + (i * 25)))
        doc.text(formacao[i].dataInicio, 150, (212 + (i * 25)))
        doc.text("-", 167, (212 + (i * 25)))
        doc.text(experiencias[i].dataFim, 170, (212 + (i * 25)))
    }

    doc.save(`${participante.nome}-CV`);
        
}

export default MyDoc