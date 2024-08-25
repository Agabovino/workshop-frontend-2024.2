'use client'

// page.jsx
import React, { useEffect, useState } from 'react';
import Header from '@/app/components/Header';
import AgentCard from '@/app/components/AgentCard';

export default function Home() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [input, setInput] = useState("");

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
            classe={agent.role ? agent.role.displayName : 'N/A'} // Verifica se role existe
            description={agent.description}
            profile={agent.displayIcon}
            abilities={agent.abilities} // Passar as habilidades
          />
        ))}
      </div>
    </main>
  );
}
