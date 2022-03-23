import Header from './Header';
import Card from './Card';
import projects from './Projects';
import Skills from './Skills';


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
      <Skills />
      <div className='projects'>
      <h1>Projects</h1>
      </div>
      {projects.map(createCard)}
      
    </div>
  );
}

export default App;
