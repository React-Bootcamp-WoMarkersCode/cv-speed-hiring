import React from 'react';
import jsPDF from "jspdf";
import html2canvas from 'html2canvas';

const MyDoc = (objetivo, habilidades, participante, experiencias, formacao) => {
    const doc = new jsPDF();
    // const imgAvatar = avatarImg.match(/\.(jpeg|jpg|gif|png)$/) != null) || (avatarImg.includes('avataaars.io'))) ? participante.avatar : imgAvatarDefault
    // doc.addImage(imgAvatar, 'png', 10, 30);
    doc.setFontSize(14);
    doc.setFontType("bold");
    doc.text(`${participante.nome}`, 10, 50)
    doc.setFontType("bold");
    doc.text(`${participante.cargo}`, 10, 60)
    doc.setFontSize(12);
    doc.setFontType("normal");
    doc.text(`${participante.email}`, 10, 70)
    doc.text(`${participante.telefone}`, 10, 80)
    doc.text(`${participante.cidade} - ${participante.uf}`, 10, 90)
    doc.text(`${participante.linkedin}`, 10, 100)
    doc.text(`${participante.github}`, 10, 110)

    var objetivoTitle = doc.splitTextToSize(`${objetivo}`,  120, 80);
    var habilidadesTitle = doc.splitTextToSize(`${habilidades}`, 120, 110);
    // var experienciaTitle = doc.splitTextToSize(`${experiencias}`, 140, 120);
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

    doc.save(`${participante.nome}` + "-" + "CV");

};

export default MyDoc