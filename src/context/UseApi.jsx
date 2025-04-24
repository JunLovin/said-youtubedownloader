import { createContext, useState } from 'react'

export const UseApiContext = createContext()

function UseApi({ children }) {
    const [id, setId] = useState('')
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const fetchData = async (id) => {
        try {
            setLoading(true)
            const response = await fetch('http://localhost:3000/api/get', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ id })
            })

            if (!response.ok) {
                throw new Error(`API responded with status: ${response.status}`)
            }

            const responseData = await response.json()
            console.log("API Response:", responseData)
            setData(responseData)
            setLoading(false)
            return responseData // Devuelve los datos para que puedan ser utilizados en el componente Hero
        } catch (err) {
            console.error("Error fetching data:", err)
            setError(err)
            setLoading(false)
            throw err // Re-lanza el error para manejarlo en el componente
        }
    }

    return (
        <>
            <UseApiContext.Provider value={{ id, setId, data, loading, fetchData, error }}>
                {children}
            </UseApiContext.Provider>
        </>
    )
}

export default UseApi