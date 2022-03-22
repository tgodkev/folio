import Header from './Header';
import Card from './Card';
import projects from './Projects';


function App() {




function createCard(projects, n){
  return(
    <Card 
      id = {n}
      title = {projects.name}
      content = {projects.description}
      photo = {projects.img}
      link = {projects.link}
      source = {projects.source}
    />
  )
}



  return (
    <div>
      <Header />

      <div className='container'>{projects.map(createCard)}</div>
      
    </div>
  );
}

export default App;
