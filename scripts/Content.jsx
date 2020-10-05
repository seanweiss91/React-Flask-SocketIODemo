import React, { useState, useEffect } from 'react';
import { Socket } from './Socket';

// export class Content extends React.Component {
//     render() {
//         return <div><h1>Hello from React!</h1></div>;
//     }
// }



export default function Content() 
{
    const [foodList, setFoodList] = useState([]);
    const [serverMessage, setServerMessage] = useState("");
    const [inputText, setInputText] = useState("");
    
    function AddItem()
    {
        Socket.emit('addItem', {item: inputText });
    }
    
    function UpdateInputText(e)
    {
        e.preventDefault();
        if (e.target.value == "\n")
              return;
        setInputText(e.target.value);
    }
    
    useEffect(() => {
    Socket.on('newMessage', payload => {
        if (payload["message"] == "duplicate")
        {
            setServerMessage("This item is already in the grocery list!");
        }
        else if (payload["message"] == "addedItem")
        {
            setServerMessage("New item added!");
            setFoodList(payload["groceryList"]);
        }
      
    });
  }, []); //only re-run the effect if new message comes in
    
    const groceryList = foodList.map((food, i) =>{
          return (
              <div className='foods'>
                  <ul>
                    <li key={i}>
                        {food}
                    </li>
                  </ul>                
              </div>
          );
    });
    
    return (
        <div>
            <h1>Add a food item to your grocery list!</h1>
            <input onChange={UpdateInputText} type="text" id="fname" name="fname"/>
            <button onClick={AddItem}>Add Item</button>
            <h2>Server Messgae: {serverMessage}</h2>
            <h3>Current Grocery List!</h3>
            {groceryList}
        </div>
        
    )
}