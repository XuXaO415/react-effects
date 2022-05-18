import Counter from './Counter'
import ProfileViewer from './ProfileViewer'
import ProfileSearchForm from './ProfileSearchForm'
import ProfileViewerWithSearch from './ProfileViewerWithSearch'
// import Timer from "./Timer";
// import TimeWrapper from './TimeWrapper'
import Video from './Video'
import './App.css'

function App() {
  return (
    <div className="App">
      {/* <TimeWrapper /> */}
      <Video />
      <Counter /> {/* <ProfileSearchForm /> */} <ProfileViewerWithSearch />
      <ProfileViewer name="XuxaO415" color="rose" />
      <ProfileViewer name="Elie" color="" />
      <ProfileViewer name="Xuxa" color="red" />
      <ProfileViewer name="Colt" color="teal" />
    </div>
  )
}

export default App;
