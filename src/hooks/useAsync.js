import { useState, useEffect } from "react"

export const useAsync = (asyncFunc, dependencies = []) => {

    const [data, setData] = useState()
    const [error, setError] = useState()
    const [loading, setLoading] = useState(true)

    // Nos aseguramos que dependencies sea un array para que no se rompa el useEffect
    if(!Array.isArray(dependencies)){
        dependencies = []
        console.error('No se pasó un array como dependencia del useEffect que contiene asyncFunc')
    } 

    useEffect(() =>{
        setLoading(true)

        asyncFunc()
            .then( data => {
                setData(data)
            })
            .catch(error => {
                setError(error)
            })
            .finally(()=>{
                setLoading(false)
            })
    }, dependencies) // eslint-disable-line

    return {
        data,
        error,
        loading
    }
    

}

