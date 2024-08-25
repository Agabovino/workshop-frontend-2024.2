import styles from "@/app/styles/AgenteCard.module.css";

const AgentCard = ({ name, description, profile }) => {
    return (
        <div className={styles.card}>
            <img src={profile} alt={name} className={styles.profile} />
            <div className="innerCard-content">
                <h3 className={styles.name}>{name}</h3>
                <p className={styles.description}>{description}</p>
            </div>
        </div>
    );
}

export default AgentCard;
