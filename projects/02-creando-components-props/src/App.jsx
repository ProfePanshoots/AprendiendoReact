import './App.css'
import Card from './components/Card'
import Title from './components/Title'

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
        description="Soy un desarrollador FullStack con conocimientos variados."
      />
      <Title title="Clase 2" />
      <Card
        title="Ingeniero en Construcción"
        photoUrl="https://unavatar.io/white"
        name="Doctor"
        last="White"
        profession="Docente"
        description="Especializado en concreto, hormigón y techos."
      />
      <Title title="Clase 2" />
      <Card
        title="Viejito con regalos"
        photoUrl="https://unavatar.io/santa"
        name="Papá"
        last="Noel"
        profession="Viejito Pascuero"
        description="Especializado en alguna cosa."
      />
    </>
  )
}

export default App
