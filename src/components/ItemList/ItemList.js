import Item from "../Item/Item"


function ItemList({products}) {
        
    return (
            <>    
                <div className="mx-auto flex my-3 w-full px-4 mt-6 flex-wrap pb-12 gap-4">
                    { products.map( prod => (
                            <Item 
                                prod={prod}
                                key={prod.id}
                            />
                        ))
                    }                
                </div>
            </>
    )
}

export default ItemList