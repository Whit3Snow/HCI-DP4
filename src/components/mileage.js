import React,{useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import '../style/mileage.css';
import imgfile from '../ranking.png';
import imgfile2 from '../goal.png';
import imgfile3 from '../1st.png';
import imgfile4 from '../2nd.png';
import imgfile5 from '../3rd.png';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {db,firebaseApp, firebase} from "../firebase.js"

async function rank(){ 
    var mileages=[]; 
    var rankedgroup=[];
    var rank=[];
    var gm=[];
    var order=[];
    
    await db.collection("Groups").get().then((querySnapshot) => {
        var groupnames=[];
        //var mileages=[];
        
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            groupnames.push(doc.id);
            // console.log(doc.id, " => ", doc.data());
            mileages.push([doc.data().mileage,mileages.length]);
            gm.push(groupnames);
            gm.push(mileages);
            order.push(doc.data().mileage)
            order.sort(function(a, b)  {
                return b - a;
              });
            rank=order.slice(0,6);
        });
        var ranking=[];
        for(var i=0;i<6;i++){
            for (var j=0;j<mileages.length;j++){
                if(mileages[j][0]==order[i]) ranking.push(mileages[j][1]);
            }
        }
        //var rankedgroup=[];
        for(var k=0;k<ranking.length;k++){
            rankedgroup.push(groupnames[ranking[k]]);
        }
        console.log(rankedgroup);
        //b = rankedgroup;
        //console.log(b);
        //return rankedgroup;
        
    });
    console.log(order)

    return [rankedgroup,rank,gm,order];
}

function Mileage(props){

    var size = 1474;
    var zoom = window.innerWidth / size 

    document.body.style.zoom = zoom;

    var mygroup=props.location.state.group;
    console.log(mygroup);
    const [ranks, setRanks] = useState([]);
    const [mileages, setMileages] = useState([]);
    const [mymileages, setmyM]=useState([]);
    const [myRanking, setmyR]=useState([]);

    useEffect(() =>{
        async function fetchAndSetUser() { 
            const data = await rank();
            function numberWithCommas(x) {
                return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            }
            var comma=[];
            for (var i=0;i<6;i++){
                comma.push(numberWithCommas(data[1][i]));
            }
            var names=data[2][0];
            var rami=data[2][1];
            var mm;
            for (var j=0;j<names.length;j++){
                if(names[j]==mygroup) mm=rami[j];
            }
            for (var k=0;k<data[3].length;k++){
                if(data[3][k]==mm[0]) await setmyR(k+1);
            }
            await setmyM(mm[0].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
            console.log(data)
            await setRanks(data[0]);
            await setMileages(comma);
            console.log(ranks)
           }
        fetchAndSetUser();
        // mileage1 = await rank()
        // console.log(mileage1)
        // setRanks(mileage1[0])
        // console.log(ranks)
    },[])
    console.log(ranks)
    console.log(mileages)
    console.log(mymileages)
    console.log(myRanking)

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {

        console.log("dkdkdkdkdk");
        setOpen(false);
        const new1 = getMovies();
        new1.splice(1,1);
        setMovies({data: new1})

    };

    const remove = () => {
        const num = 1
        
    }

    const getMovies = () => {
        const movies = [
        {date: "2000-10-12", state: "try again" },
        {date: "2000-10-12", state: <>&nbsp;<button className = "success" variant="outlined" color="primary" onClick={handleClickOpen}>success</button>&nbsp;&nbsp;&nbsp;<button className = "fail" onClick={remove}>fail</button></>},
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

    return(
        <body>
            <div className="App-header">
        <header className="header">
        <div className="menu-bar"></div>
        <div className="team-name"> {mygroup} </div>
        <div className="mileage"> {mymileages} </div>
        <div className="m">mileage</div>
        <Link to= './mileage'><button className="M-1">MILEAGE</button></Link>
        <Link to='./challenge'><button className="M-2">CHALLENGE</button></Link>
        <Link to='./management'> <button className="M-3">MANAGEMENT</button> </Link>
        <div className="goal"> &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;GOAL</div>
        <div className="goal-inner" > 
                <table className="table1">
                        <thread>
                        <tbody >
                            {movies.data.map(movie =>
                                <tr key={movie.id} width = "600">
                                    <td width = "500" text-align = 'center' className = "m_Td">{movie.date}</td>
                                    <td width = "300" text-align = 'center' className = "m_Td"> 
                                        {movie.state}
                                    </td>
                                </tr>
                            )}
                        </tbody>
                        </thread>
                    </table>
            
            
            </div>
        <div className="ranking"> &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;RANKING</div>
        <button className="plus">+</button>
        <div className="line"></div>
        <div className="line2"></div>
        <div className="rec1"></div>
        <div className="cir1"></div>
        <div className="rec2"></div>
        <div className="cir2"></div>
        <img className="Goalimg" src={imgfile2}/>
        <img className="Rankimg" src={imgfile} />
        <div className="Our">My Group: No. {myRanking}</div>
 
        <div className="first"></div>
        <img className="star1" src={imgfile3}/>
        <div className="team1">1st</div>
        <div className="team-name1">{ranks[0]}</div>
        <div className="mileage1">{mileages[0]}</div>
        <div className="mileage-1">mileage</div>
        <div className="second"></div>
        <img className="star2" src={imgfile4}/>
        <div className="team2">2nd</div>
        <div className="team-name2">{ranks[1]}</div>
        <div className="mileage2">{mileages[1]}</div>
        <div className="mileage-2">mileage</div>
        <div className="third"></div>
        <img className="star3" src={imgfile5}/>
        <div className="team3">3rd</div>
        <div className="team-name3">{ranks[2]}</div>
        <div className="mileage3">{mileages[2]}</div>
        <div className="mileage-3">mileage</div>
        <div className="fourth">&nbsp;&nbsp;&nbsp;4</div>
        <div className="mileage4">{mileages[3]}</div>
        <div className="team-name4">{ranks[3]}</div>
        <div className="mileage-4">mileage</div>
        <div className="fifth">&nbsp;&nbsp;&nbsp;5</div>
        <div className="mileage5">{mileages[4]}</div>
        <div className="team-name5">{ranks[4]}</div>
        <div className="mileage-5">mileage</div>
        <div className="sixth">&nbsp;&nbsp;&nbsp;6</div>
        <div className="mileage6">{mileages[5]}</div>
        <div className="team-name6">{ranks[5]}</div>
        <div className="mileage-6">mileage</div>
        </header>
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            >
            <DialogTitle id="alert-dialog-title" >+5,000M</DialogTitle>
            <DialogContent>
            <DialogContentText id="alert-dialog-description">
                Congratulations on reaching your goal!
            </DialogContentText>
            </DialogContent>
            <DialogActions>
            <Button onClick={handleClose} color="primary" autoFocus>
                Get Mileage!
            </Button>
            </DialogActions>
            </Dialog>     
    </div>
        </body>
    );
}

export default Mileage;