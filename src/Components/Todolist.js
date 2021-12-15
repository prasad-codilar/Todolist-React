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
    const [items, setItems] = useState(getLocalItems());




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


    return (
        <>
            <div className='image'>
                <img src="images/1.jpg" alt="" />
            </div>
            <div className="parent">
                <h1>
                    TODO
                </h1>
                <div className="input">
                    <input type="text" placeh a new placeholder='Create a new todo...' onChange={itemEvents} />
                    <button onClick={addList}>+</button>
                </div>

            </div>
            <div className="entry">
                <ol>

                    {items.map((itemVal) => {
                        return <li>{itemVal}</li>
                    })}
                </ol>
            </div>
        </>
    )
}

export default Todolist
