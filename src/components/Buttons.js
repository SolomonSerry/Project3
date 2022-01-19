const Buttons = ( props ) => {

    return (
        <div>
            <button onClick={()=> props.setPage(props.page - 1 )}>Previous</button>
           
            <button onClick={() => props.setPage(props.page + 1)}>Next</button>
          
        </div>
    )
}

export default Buttons;