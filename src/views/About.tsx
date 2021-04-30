import React from "react";
import { Link } from "react-router-dom";

import Home from "./Home";
import LogoSVG from "assets/logos/logo.svg";

const About = () => {
  return (
    <>
      <Home />
      <main className="about">
        <div className="about_back"></div>
        <section className="content">
          <div>
            <img src={LogoSVG} className="about_logo" alt="Logo" />
            <p>
              Esta aplicación fue diseñada para la Unidad de Aprendizaje "Taller
              de Programación"
            </p>
            <p>Sus creadores son:</p>

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
            <Link to="/home">
              <button>Prueba esta app</button>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;
