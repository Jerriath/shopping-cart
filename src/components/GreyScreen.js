



const GreyScreen = (props) => {

    //Literally just a grey screen to cover page when an ItemPage is opened
    return (
        <div className="greyScreen"  onClick={props.onClick}/>
    )
}

export default GreyScreen;