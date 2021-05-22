import React from 'react';
import './component.css';

function component(){
    return(
        <body>
            <div class = "bar"></div>
            <input type = "text" class = "setTitle" placeholder = " Title"/>
            <input type = "text" class = "setTag"/>
            <button class = "Tag">Tag Register</button>
            <div class = "setCal"></div>
            <table class = "components">
                <tr>
                    <td>boo</td>
                </tr>
                <tr>
                    <td>boo</td>
                </tr>
            </table>
            <div class = "Paper"></div>
            
            <button class = "confirm">Confirm</button>
        </body>
    )
}

export default component;