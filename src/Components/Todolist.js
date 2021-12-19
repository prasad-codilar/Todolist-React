import React, { useEffect, useState } from 'react';
import './Todolist.css';



const getLocalItems = () => {
    let lists = localStorage.getItem('list');
    if (lists) {
        return JSON.parse(localStorage.getItem('list'));
    } else {
        return [];
    }
}

function Todolist() {

    const [inputList, setinputList] = useState("");
    // console.log(inputList);
    const [items, setItems] = useState(getLocalItems());
    console.log(items);





    // const[bg,setBg]=useState(document.body.style.backgroundColor="black");
    document.body.style.background = "black";



    const theme = () => {
        var image = document.getElementById('change1');
        if (image.src.match("images/theme.svg")) {
            image.src = "images/moon.svg";
        }
        else {
            image.src = "images/theme.svg";
        }


        var imagee = document.getElementById('change2');
        if (imagee.src.match("images/1.jpg")) {
            imagee.src = "images/2.jpg";
        }
        else {
            imagee.src = "images/1.jpg";
        }












        if (document.body.style.background === "black") {
            document.body.style.background = "white";
        }
        else {
            document.body.style.background = "black";
        }
    }











    const itemEvents = (event) => {
        setinputList(event.target.value);
    }
    const addList = () => {
        setItems((oldItems) => {
            return [...oldItems, inputList]
        })
    }

    useEffect(() => {
        localStorage.setItem('list', JSON.stringify(items))
    }, [items])







    const checkBox = () => {

        // const defaultt = document.getElementById('scratch').style.textDecoration = "none";
        // if (defaultt === "none") {
        //     document.getElementById('scratch').style.textDecoration = "line-through";
        // } else {
        //     document.getElementById('scratch').style.textDecoration = "none";
        // }


        const defaultt = [...document.querySelectorAll('.list li')];

        for(const li of defaultt){
            document.getElementById('scratch').style.textDecoration = "line-through";
        }




        // if (defaultt.click) {
        //     document.getElementById('scratch').style.textDecoration = "line-through";
        // } else {
        //     document.getElementById('scratch').style.textDecoration = "underline";
        // }





    }

    const deletee = (id) => {
       
       

        const updatedItems=items.filter((elem,ind)=>{
            return ind !== id;
            });
            setItems(updatedItems);
       
       


      
       
    }


    const completed = () => {


    }



    return (
        <>
            <div className='image'>
                <img src="images/1.jpg" id="change2" alt="" />
            </div>
            <div className="parent">
                <h1>
                    TODO <span id='light' onClick={theme}
                    ><img src="images/theme.svg" id="change1" alt="" />
                    </span>
                </h1>
                <div className="input">
                    <input type="text" placeh a new placeholder='Create a new todo...' onChange={itemEvents}  id='noo'/>
                    <button onClick={addList}>+</button>
                </div>

            </div>
            <div className="entry">
                <ol className='ol'>

                    {items.map((itemVal, ind) => {
                        return <li key={ind}>
                            <input type="checkbox" value="" onClick={checkBox} id="check" /> 
                            
                            {itemVal}
                            <span><img src="images/close.svg" onClick={()=>deletee(ind)} alt="" /></span>
                        </li>
                        
                        
                        
                        
                        
                       
                    })}

                   


                </ol>

            </div>
            <div className="function">
                <span>All</span>
                <span>Active</span>
                <span onClick={completed}>Completed</span>
            </div>
        </>
    )
}

export default Todolist
