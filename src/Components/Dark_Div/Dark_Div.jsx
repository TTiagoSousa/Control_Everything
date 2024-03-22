import React, { useEffect } from 'react';
import './Dark_Div.scss';

const Dark_Div = ({ toggled, toggle }) => {

  // Toggle Sidebar
    const handleClick = () => {
      toggled(false)
    };
  // Toggle Sidebar

  // Block Scroll
    const displayStyle = toggle ? 'block' : 'none';

    useEffect(() => {
      // Bloquear o scroll quando a barra lateral estiver ativa
      if (toggle) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto'; // Restaurar o scroll quando a barra lateral estiver fechada
      }

      // Função de limpeza que restaura o scroll quando o componente é desmontado
      return () => {
        document.body.style.overflow = 'auto';
      };
    }, [ toggle ]);
  // Block Scroll


  return (
    <>
      <div 
        className={`Darker_Desactivate ${ toggle ? 'Darker_Activate' : ''}`}
        onClick={handleClick}
        style={{ display: displayStyle }}
      >
      </div>
    </>
  )

};

export default Dark_Div;