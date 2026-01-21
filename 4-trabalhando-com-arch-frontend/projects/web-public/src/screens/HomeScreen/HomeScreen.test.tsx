import { customRender } from "@alura/test-commons/react-testing-library";
import { HomeScreen } from "./HomeScreen";
import { AllProviders } from "../../../components/AllProviders";

// Aqui podemos customizar os valores padrão dos providers para cada teste
const render = customRender((props) => <AllProviders {...props} />);

describe("<HomeScreen />", () => {
  it("renders the page", () => {
    const { container } = render(<HomeScreen />);
    // Para páginas provavemlente não iremos fazer teste de snapshot, mas fica o demo
    expect(container).toMatchSnapshot();
  });
});
