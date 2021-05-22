import React from 'react'; 
import { BrowserRouter as Router, Route } from 'react-router-dom';
import DiaryPage from './Diary'; 
import MainPage from './main';
import ComponentPage from './component';
function App() { 
    return ( 
        <> 
            <Router> 
                <Route path='/diary' component={DiaryPage} /> 
                <Route path='/main' component={MainPage} />
                <Route path='/component' component={ComponentPage} />
            </Router> 
        </> 
    ); 
} 

export default App;

