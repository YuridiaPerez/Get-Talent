import React from 'react'
import verfi from 'assets/cuenta-verificada.png'
import * as api from "../../api"

function Verficada() {
    const submitForm = async () => {
        try{
            const {status, data} = await api.userVerification({
                email,
        })
        if(status === 200) setSuccess(true)
        console.log(data)
        }catch(error){
            setError(false)
            console.log(error)
        }
}
return(
    <div>
        <img src={verfi} alt=""/>
    </div>
)
}
export default Verficada