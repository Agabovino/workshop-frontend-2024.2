'use client'

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
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

  const filteredData = data.filter(agent =>
    agent.displayName.toLowerCase().includes(input.toLowerCase())
  );

  return (
    <main>
      <Header onInputChange={setInput} />

      <div className="flex flex-wrap gap-4 justify-center">

        {filteredData.map(agent => (
          <Link href={`/agents/${agent.uuid}`} key={agent.uuid} className="flex flex-col items-center">
            <AgentCard
              name={agent.displayName}
              classe={agent.role ? agent.role.displayName : 'N/A'}
              description={agent.description}
              profile={agent.displayIcon}
              abilities={agent.abilities} 
            />
          </Link>
        ))}
      </div>
    </main>
  );
}
