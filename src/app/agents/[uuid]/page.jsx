import React from 'react';
import AgentCard from '@/app/components/AgentCard';

const AgentDetails = async ({ params }) => {
  const { uuid } = params;

  const res = await fetch(`https://valorant-api.com/v1/agents/${uuid}`);
  const result = await res.json();
  const agent = result.data;

  return (
    <main>

      <AgentCard

        name={agent.displayName}
        classe={agent.role ? agent.role.displayName : 'N/A'}
        description={agent.description}
        profile={agent.displayIcon}
        abilities={agent.abilities}

      />

      <div className="abilities">

        {agent.abilities.map((ability) => (
          <div key={ability.slot} className="ability">
            <img src={ability.displayIcon} alt={ability.displayName} />
            <h4>{ability.displayName}</h4>
            <p>{ability.description}</p>

          </div>

        ))}
      </div>
      
    </main>
  );
};

export default AgentDetails;
