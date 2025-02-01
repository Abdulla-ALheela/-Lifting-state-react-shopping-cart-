import { useState } from "react";
import InventoryList from "../InventoryList/InventoryList";

const Shop = (props) => {

const [shopInventory , setShopInventory] = useState(props.inventoryData)
const [userInventory , setUserInventory] = useState([])

const addItems = (item) => {

    props.inventoryData.map((inventoryItem)=> (

    inventoryItem._id === item._id ? setUserInventory([item , ...userInventory]):null
         
    ))

    const newShopInventory = shopInventory.filter((inventoryItem) => inventoryItem._id !== item._id);


    setShopInventory(newShopInventory)

}

const removeItems = (item) => {
    props.inventoryData.map((inventoryItem)=> (

        inventoryItem._id === item._id ? setShopInventory([item , ...shopInventory]):null
             
        ))
    
        const newUserInventory = userInventory.filter((inventoryItem) => inventoryItem._id !== item._id);
    
    
        setUserInventory(newUserInventory)
}


    return (
        <>
        
        <h1>Shop</h1>
        <body>
        <div>
    <InventoryList items = {shopInventory} buttonText = {"Add Item"} title = {"Shop Inventory"} moveItems={addItems} calculate = {false}/>
    </div>
    <div>
    <InventoryList items = {userInventory} buttonText = {"Remove Item"} title = {"User Inventory"}  moveItems={removeItems} calculate = {true} />
    </div>
    </body>
    </>
    );
  };
  
  export default Shop;