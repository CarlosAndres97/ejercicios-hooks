import { fireEvent, render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../03-examples/MultipleCustomHooks";
import { useFetch } from "../../hooks/useFetch";
import { useCounter } from "../../hooks/useCounter";

jest.mock("../../hooks/useFetch");
jest.mock("../../hooks/useCounter");

describe("Pruebas en <MultipleCustomHook/>", () => {
  const mockIncrement = jest.fn();
  useCounter.mockReturnValue({
    counter: 1,
    increment: mockIncrement,
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("Debe de mostrar el componente por defecto", () => {
    useFetch.mockReturnValue({
      data: null,
      isLoading: true,
      hasError: null,
    });
    render(<MultipleCustomHooks />);
    const nextButton = screen.getByRole("button", { name: "Siguiente" });
    const backButton = screen.getByRole("button", { name: "Anterior" });

    expect(screen.getByText("Cargando..."));
    expect(screen.getByText("Info del pokemon"));
    expect(backButton.disabled).toBeFalsy();
    expect(nextButton.disabled).toBeFalsy();
  });

  test('Debe de llamar la función incrementar', () => { 
    useFetch.mockReturnValue({
      data: {
        name: "Charmander",
        id: 2,
        sprites:{
          back_default:"back_default",
          back_shiny:"back_shiny",
          front_default:"front_default",
          front_shiny:"front_shiny",
        }
      },
      isLoading: false,
      hasError: null,
    });
    render(<MultipleCustomHooks/>);

    const nextButton = screen.getByRole("button", { name: "Siguiente" });
    fireEvent.click(nextButton);

    expect(mockIncrement).toHaveBeenCalled();
  });

  test('Debe de mostrar un componente con un pokemon', () => { 
    useFetch.mockReturnValue({
      data: {
        name: "Charmander",
        id: 2,
        sprites:{
          back_default:"back_default",
          back_shiny:"back_shiny",
          front_default:"front_default",
          front_shiny:"front_shiny",
        }
      },
      isLoading: false,
      hasError: null,
    });
    render(<MultipleCustomHooks/>);
    //screen.debug()
    expect(screen.getAllByText("#1 - Charmander")).toBeTruthy();
  })
});

