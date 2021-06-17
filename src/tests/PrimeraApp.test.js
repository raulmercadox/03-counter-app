import React from "react";
import { shallow } from "enzyme";
import PrimeraApp from "../PrimeraApp";

describe("Pruebas en <PrimeraApp />", () => {
  test("debe de mostrar </PrimeraApp /> correctamente", () => {
    const saludo = "Hola, mi nombre es Raul Mercado";
    const wrapper = shallow(<PrimeraApp saludo={saludo} />);

    expect(wrapper).toMatchSnapshot();
  });

  test("debe de enviar el subtitulo enviado por props", () => {
    const saludo = "Hola, mi nombre es Raul Mercado";
    const subTitulo = "soy un subtitulo";
    const wrapper = shallow(
      <PrimeraApp saludo={saludo} subtitulo={subTitulo} />
    );

    const textoParrafo = wrapper.find("p").text();
    // console.log(textoParrafo);
    expect(textoParrafo).toBe(subTitulo);
  });
});
