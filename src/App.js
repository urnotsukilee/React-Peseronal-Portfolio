import './App.css';
import VerticalTabs from './SideBar';

const classes = 'py-12 w-4/5 flex flex-col justify-center items-center'

function App() {
  return (
    <div className="App flex mx-auto w-2/3 divide-x-4 divide-black divide-dashed">
      <div className="App-sidebar h-screen w-1/4 flex flex-col justify-center divide-y-2 items-center px-5" >
        <div className={classes}>h1</div>
        <div className={classes}>
          <VerticalTabs/>
        </div>
        <div className={classes}>h2</div>
      </div>
      <div className='App-content w-3/4'>

      </div>
    </div>
  );
}

export default App;
