



const IncrementScale = (props) => {




    //Component used in the ItemPage to change the number of items you would like to purchase
    return (
        <div className="increment">
            <button className="valueChanger" onClick={props.decrement}>{"<"}</button>
            <input type="number" value={props.value} className="amount" onChange={props.setValueFunc} />
            <button className="valueChanger" onClick={props.increment} >{">"}</button>
        </div>
    )
}

export default IncrementScale;