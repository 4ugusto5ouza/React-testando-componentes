import { render, screen } from "@testing-library/react";
import { Formulario } from "./Formulario";

//Jest

test("input vazio não permite add novos participantes", () => {
  render(<Formulario />);

  //encontrar o DOM o input
  const input = screen.getByPlaceholderText(
    "Insira os nomes dos participantes"
  );

  // encontrar o botão
  const botao = screen.getByRole("button");

  //garantir que o input esteja no documento
  expect(input).toBeInTheDocument();

  //garantir que o btn esteja habilitado
  expect(botao).toBeDisabled();
});
