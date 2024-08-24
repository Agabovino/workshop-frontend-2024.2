'use client'

import Image from "next/image";
import AgentCard from "@/app/components/AgentCard";
import { useEffect, useState } from "react";

export default function Home() {

  const [data, setData] = useState([]);
  const [error, setError] = useState(null); 

  useEffect(() => {
    fetch('https://valorant-api.com/v1/agents')
      .then(response => response.json())
      .then(result => {
        setData(result.data);  
  
      })
      .catch(error => {
        console.error('Erro ao carregar o arquivo JSON:', error);
        setError(error);   
      });
  }, []);


  return (
    
    <main>
      <AgentCard key = {} nome ={} classe={} descrição ={} foto={}/>
      
    </main>
  );
}
