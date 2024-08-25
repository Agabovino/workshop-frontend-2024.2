'use client'

import React, { useEffect, useState } from 'react';
import Header from '@/app/components/Header';
import AgentCard from '@/app/components/AgentCard';
import Carousel from './components/Carousel';

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

  const filteredData = data.filter(agent =>
    agent.displayName.toLowerCase().includes(input.toLowerCase())
  );

  return (
    <main>
      <Header onInputChange={setInput} />

      <div className='flex flex-wrap gap-4 justify-center'>
        <Carousel items={filteredData.slice(0, 3)} />
      </div>

      <div className="flex flex-wrap gap-4 justify-center">
        {filteredData.map(agent => (
          <AgentCard
            key={agent.uuid}
            name={agent.displayName}
            classe={agent.role ? agent.role.displayName : 'N/A'}
            description={agent.description}
            profile={agent.displayIcon}
            abilities={agent.abilities}
          />
        ))}
      </div>
    </main>
  );
}
