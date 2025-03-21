import { render, screen } from "@testing-library/react"
import { MainApp } from "../../09-useContext/MainApp"
import { MemoryRouter } from "react-router-dom"

describe('Pruebas en <mainApp/>', () => { 
  test('Debe de mostrar el HomePage', () => { 
    render(
      <MemoryRouter>
        <MainApp/>
      </MemoryRouter>
    );
    
    expect(screen.getAllByText('HomePage')).toBeTruthy()

   })
   test('Debe de mostrar el LoginPage', () => { 
    render(
      <MemoryRouter initialEntries={['/login']}>
        <MainApp/>
      </MemoryRouter>
    );
    
    expect(screen.getAllByText('LoginPage')).toBeTruthy()

   })
})