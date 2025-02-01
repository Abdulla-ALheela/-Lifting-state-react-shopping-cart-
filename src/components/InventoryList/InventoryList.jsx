import './InventoryList.css';

const InventoryList = (props) => {
let totalPrice = 0

props.items.map((item) => (
    totalPrice += item.price
))
    return (
      <>
       <h1>{props.title}</h1>
          {props.items.length === 0 ? <h2>Empty</h2>: props.items.map((item) => (
  
            <h4 key={item._id}> 
            <p style={{ whiteSpace: 'pre' }} >{`${item.name}              `}</p>
            <p> {`Price:${item.price} `} </p>
              <button onClick={() => props.moveItems(item)}>{props.buttonText}</button>
            </h4>
     
          ))}
          <h2>{props.calculate ? "Total : " + totalPrice :null}</h2>
      </>
    )
  
  }
  
  export default InventoryList;