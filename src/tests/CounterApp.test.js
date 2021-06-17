import React from "react";
import { shallow } from "enzyme";
import CounterApp from "../CounterApp";

describe("Pruebas en CounterApp", () => {
  let wrapper = shallow(<CounterApp />);

  beforeEach(() => {
    wrapper = shallow(<CounterApp />);
  });

  test("Debe mostrar <CounterApp/> correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe mostrar el valor por defecto de 100", () => {
    const valorDefecto = wrapper.find("label").text();
    expect(valorDefecto).toBe("100");
  });

  test("Debe visualizar un valor de 350", () => {
    const valorInicial = 350;
    const wrapper = shallow(<CounterApp valor={valorInicial} />);
    const valorObtenido = wrapper.find("label").text();
    expect(valorObtenido).toBe(String(valorInicial));
  });

  test("Prueba de boton que aumenta en 1", () => {
    wrapper.find("button").at(0).simulate("click");
    const valorObtenido = wrapper.find("label").text();
    expect(valorObtenido).toBe("101");
  });

  test("Prueba de boton que disminuye en 1", () => {
    wrapper.find("button").at(1).simulate("click");
    const valorObtenido = wrapper.find("label").text();
    expect(valorObtenido).toBe("99");
  });

  test("Probar el boton reset", () => {
    const valorInicial = 350;
    const wrapper = shallow(<CounterApp valor={valorInicial} />);
    wrapper.find("button").at(0).simulate("click");
    wrapper.find("button").at(0).simulate("click");
    wrapper.find("button").at(0).simulate("click");
    wrapper.find("button").at(2).simulate("click"); // Botón reset
    const valorObtenido = wrapper.find("label").text();
    expect(valorObtenido).toBe(String(valorInicial));
  });
});
