import styles from "@/app/styles/AgenteCard.module.css";

const AgentCard = ({ name, description, profile }) => {
    return (
        <div className={styles.card}>
            <img src={profile} alt={name} className={styles.profile} />
            <div className="innerCard-content">
                <h3 className={styles.name}>Nome: {name}</h3>
                <p className={styles.description}>Descrição: {description}</p>
            </div>
        </div>
    );
}

export default AgentCard;
