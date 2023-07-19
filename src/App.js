import { Icon } from '@mui/material';
import './App.css';
import VerticalTabs from './SideBar';

const classes = 'py-12 w-4/5 flex flex-col justify-center items-center'

function App() {
  return (
    <div className="App mx-auto w-2/3 flex">
      <div className="App-sidebar h-screen w-1/5 sticky left-0" >
        <button className=' absolute right-0 bg-black text-white p-1 w-10 h-10 -mr-5'><Icon/></button>
        <nav className=' absolute right-0 w-2 top-16 h-screen bg-black'></nav>
        <div className='h-full flex flex-col justify-between divide-y-2'>
          <div className={classes}>h1</div>
          <div className={classes}>
            <VerticalTabs/>
          </div>
          <div className={classes}>h2</div>
        </div>

      </div>
      <div className='App-content w-4/5'>
        <div className='h-screen bg-slate-500'></div>
      </div>
    </div>
  );
}

export default App;
