// AgentCard.jsx
import React from 'react';
import styles from '@/app/styles/AgenteCard.module.css';

const AgentCard = ({ name, classe, description, profile, abilities }) => {
  return (
    <div className={styles.card}>
      <img src={profile} alt={name} className={styles.profile} />
      <div className={styles.innerCardContent}>
        <h3 className={styles.name}>{name}</h3>
        <h4 className={styles.classe}>{classe}</h4>
        <p className={styles.description}>{description}</p>
        <div className={styles.abilities}>
          {abilities.map((ability, index) => (
            <div key={index} className={styles.ability}>
              <img src={ability.displayIcon} alt={ability.displayName} className={styles.abilityIcon} />
              <div className={styles.abilityInfo}>
                <p className={styles.abilityName}>{ability.displayName}</p>
                <p className={styles.abilityDescription}>{ability.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AgentCard;
