import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {useEffect, useState} from "react";
import axios from "axios";

export default function Home() {
    const [message, setMessage] = useState([])
    const [load, setLoad] = useState(false)

  useEffect(()=>{
    const res = async () => {
        setLoad(true)
        const respons = await
            axios.get("https://dfea-185-34-241-15.eu.ngrok.io/")
                .then(respon => setMessage(prevState =>
                    [ respon.data]))
        console.log(respons)
        setLoad(false)
    }
    res()
  }, [])
  return (
   <>
       { load ? "Загрузка" : ( message.map(item=>(<>
           <h1>{item.message}</h1>
       </>))) }
   </>
  )
}
