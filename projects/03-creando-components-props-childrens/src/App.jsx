import "./App.css";
import Card from "./components/Card";
import Title from "./components/Title";

function App() {
  return (
    <>
      <Title title="Clase 1" />
      <Card
        title="Ingeniero en Informática"
        photoUrl="https://unavatar.io/dark"
        name="Francisco"
        last="Juillet"
        profession="Docente"
        isLike
      >
        Soy un desarrollador FullStack con conocimientos variados.
      </Card>
      <Title title="Clase 2" />
      <Card
        title="Ingeniero en Construcción"
        photoUrl="https://unavatar.io/white"
        name="Doctor"
        last="White"
        profession="Docente"
        isLike = {false}
      >
        Especializado en concreto, hormigón y techos.
      </Card>
      <Title title="Clase 2" />
      <Card
        title="Viejito con regalos"
        photoUrl="https://unavatar.io/santa"
        name="Papá"
        last="Noel"
        profession="Viejito Pascuero"
        isLike = {false}
      >
        Especializado en alguna cosa.
      </Card>
    </>
  );
}

export default App;
