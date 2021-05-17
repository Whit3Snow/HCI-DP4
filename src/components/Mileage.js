import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import '../css/mileage.css';


const GoalPage = () =>{
    const getMovies = () => {
        const movies = [
        {date: "2000-10-12", state: <><button className = "win">win</button> <button className = "lose">lose</button></> },
        {date: "2000-10-12", state: "win"},
        {date: "2000-10-12", state: "win"},
        {date: "2000-10-12", state: "win"},
        {date: "2000-10-12", state: "lose"},
        {date: "2000-10-12", state: "win"},
        {date: "2000-10-12", state: "lose"}
        ]
        return movies;
    }

    const [movies, setMovies] = useState({
        data: getMovies()
    });


    const {length: count } = movies.data;
    if(count === 0)
        return <p>도전장 정보가 없습니다.</p>

    return (
        <>
            <header className = "App-header">
            <div className="menu-bar"></div>
            <div className="team-name"> HELLO BADMINTON </div>
            <div className="mileState"> 167,000 </div>
            <div className="m">mileState</div>
            <Link to= './mileState'><button className="M-1">MILEState</button></Link>
            <Link to='./challenge'><button className="M-2">CHALLENGE</button></Link>
            <Link to='./manStatement'> <button className="M-3">MANStateMENT</button> </Link>             
            {/* <div className = "table_shape"></div> */}
            
            <table className="table1">
                <thread>
                    <tr>
                        <th width = "230" className = "m_Td">DATE</th>
                        <th width = "300" className = "m_Td">Group Name</th>
                    </tr>
                <tbody >
                    {movies.data.map(movie =>
                        <tr key={movie.id} width = "600">
                            <td width = "500" text-align = 'center' className = "m_Td">{movie.date}</td>
                            <td width = "300" text-align = 'center' className = "m_Td"> 
                                {/* <button> win </button> */}
                                {/* <select name="cars" id="cars">
                                <option value="win" font-color = 'green'>Win</option>
                                <option value="Lose">Lose</option>
                                <option value="Challenge Acceted!">Challenge Acceted!</option>
                                <option value="Challenge sent!">Challenge sent!</option>
                                </select> */}
                                {movie.state}
                            </td>
                        </tr>
                    )}
                </tbody>
                </thread>
            </table>
            
          </header>
  
        </>
    );
};

export default GoalPage;