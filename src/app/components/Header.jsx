import styles from "@/app/styles/Header.module.css"

const Header = ({ onInputChange }) => {
    return (
        <div className={styles.Header}>
            <input
                className={styles.input}
                type="text"
                placeholder="Digite o agente"
                onChange={(e) => onInputChange(e.target.value)} 
            />
        </div>
    );
};

export default Header;