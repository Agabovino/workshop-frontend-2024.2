'use client'

import { useEffect, useState } from "react";
import AgentCard from "@/app/components/AgentCard";
import Header from "@/app/components/Header";

export default function Home() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null); 
  const [input, setInput] = useState("");

  // funcao para atualizar o estado de input
  const getInput = (value) => {
    setInput(value);
  };

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

  // Funcaoo para fitlrar dados com base no input

  const filteredData = data.filter(agent =>
    agent.displayName.toLowerCase().includes(input.toLowerCase())
  );

  return (
    <main>
      <Header onInputChange={getInput} />
      <div className="flex flex-wrap gap-4 justify-center">
        {filteredData.map(agent => (
          <AgentCard
            key={agent.uuid}
            name={agent.displayName}
            description={agent.description}
            profile={agent.displayIcon}
          />
        ))}
      </div>
    </main>
  );
}
