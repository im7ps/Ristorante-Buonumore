function animation(){
    const rigth= document.getElementById('sidebar-right');
    const classRigth = rigth.className;
    if (classRigth.includes('hiddenr')) { // SE INCLUDE IDDEN VUOL DIRE CHE E' GIA NASCOSTO
        rigth.className = 'sidedestra';
    } else { // SE E' VISIBILE
        rigth.className = 'sidedestra hiddenr'; // PORCO DIO
    }
  }
