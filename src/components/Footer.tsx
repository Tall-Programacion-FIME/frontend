import React from "react";
import { CSSProperties } from "styled-components";

function Footer() {
  return (
    <footer style={footerStyles}>
      <article>
        <p>Hecho en 2021 por:</p>
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Matrícula</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Héctor Mauricio Flores Martínez</td>
              <td>1897759</td>
            </tr>
            <tr>
              <td>Sebastián Marines Álvarez</td>
              <td>2077782</td>
            </tr>
          </tbody>
        </table>
      </article>
      <article>
        <h4>Verificado y Validado para:</h4>
        <p>Equipo 6 de la clase EJ2024</p>
        <p>Grupo: 002</p>
      </article>
    </footer>
  );
}

const footerStyles: CSSProperties = {
  position: "fixed",
  bottom: "0",
  display: "flex",
  gap: "3rem",
  justifyContent: "space-around",
};

export default Footer;
