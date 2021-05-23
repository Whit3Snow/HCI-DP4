import React from 'react';
import '../style/logingroup.css';
//import Mapping from './Map';
import {db, firebaseApp, firebase} from '../firebase';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

var uid;
var group_info=[];

/*function get_info(uid){
    var ref;
    var my_groups=[];
    ref = db.collection('users').doc(uid);
    ref.get().then(doc=>{
        my_groups= doc.data()["group"];
        console.log(my_groups);
        ref = db.collection('Groups');
        var count =0;
        for(const item of my_groups){
            //console.log(index);
            var name=item;
            var exercise;
            var mileage;
            ref.doc(name).get().then(doc=>{
                exercise =doc.data()["exercise"];
                mileage = doc.data()["mileage"];
            }).then(()=>{
                group_info[count]={name:name,exercise:exercise,mileage:mileage};
                console.log(group_info);
                count++;
                if(count==my_groups.length) return 1;
            })
        }
    })
}*/

//이유는 모르겠지만 정렬이 안된다 
function Group(props){

    var size = 1900;
    var zoom = window.innerWidth / size 

    document.body.style.zoom = zoom;

    console.log("func_start");
    const [load,setLoad]=useState(true);
    if(uid==null)  {console.log(load); uid  = props.match.params.id;}
    useEffect(() => {
        function get_info(uid){
            setLoad(true);
            var ref;
            var my_groups=[];
            ref = db.collection('users').doc(uid);
            ref.get().then(doc=>{
                my_groups= doc.data()["group"];
                console.log(my_groups);
                ref = db.collection('Groups');
                var count =0;
                for(const item of my_groups){
                    //console.log(index);
                    var name=item;
                    var exercise;
                    var mileage;
                    ref.doc(name).get().then(doc=>{
                        exercise =doc.data()["exercise"];
                        mileage = doc.data()["mileage"];
                    }).then(()=>{
                        group_info[count]={name:name,exercise:exercise,mileage:mileage};
                        console.log(group_info);
                        count++;
                        if(count==my_groups.length) {setLoad(false);}
                    })
                }
            })
        }
        get_info(uid);
      }, []);
      if (load) return (<div>Hello</div>);
      else{ console.log("loaded");
        return (
        <body>
        <div id="all">
            <div id = "my_group">
                <div id="header">My Group</div>
                {
                    group_info.map((contact,i)=>{
                        return <Groupcard number={i}/>
                    })
                }
                <div className="Section" id="add"><div className="center_letter">+Add New Group</div></div>
            </div>
        </div></body>)
        }
    /*get_info 이후에 return하기만 하면 해결됨 */
    //setLoad(get_info(uid));
    /*return(<div id="all">
            </div>
        );*/
}

class Groupcard extends React.Component{
    render(){
        var name = group_info[this.props.number].name;
        var exersize = group_info[this.props.number].exercise;
        var mileage =group_info[this.props.number].mileage;
        return(
            <Link to= {{pathname:'/main',state:{group:name, user:uid}}}>
            <div className = "Section">
                <div className = "group_tree"></div>
                <div className = "group_info">
                    <div className = "name">{name}</div>
                    <div className = "exercise">Exercise : {exersize}</div>
                    <div>{mileage}M</div>
                </div>
            </div></Link> //이것도 아직 안고쳤어...
        );
    }
}



export default Group;