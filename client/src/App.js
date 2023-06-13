import './App.css';
import AllRoutes from './AllRoutes';
import Navbar from './components/navbar/Navbar';
import {BrowserRouter as Router} from 'react-router-dom';
import { useDispatch} from 'react-redux';
import { fetchAllQuestions } from './actions/question';
import { useEffect } from 'react';
import {fetchAllUsers} from './actions/users'
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllQuestions());
    dispatch(fetchAllUsers());
  }, [dispatch]);

  // const [slideIn, setSlideIn] = useState(true);

  // useEffect(() => {
  //   if (window.innerWidth <= 760) {
  //     setSlideIn(false);
  //   }
  // }, []);

  // const handleSlideIn = () => {
  //   if (window.innerWidth <= 760) {
  //     setSlideIn((state) => !state);
  //   }
  // };
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <AllRoutes/>
      </Router>
    </div>
  );
}

export default App;
