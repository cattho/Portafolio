export const useForm = (initialState={}) =>{
    const [data, setData] = useState(initialState)

    const reset = () =>{
        setData(initialState)
    }

    const handleInputChange= ({target}) =>{
        setData({...data,
        [target.name]:target.value
        })
        console.log(data, 'estoy en el useForm');
    }

    return[datos,handleInputChange,reset]
}