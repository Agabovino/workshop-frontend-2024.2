import styles from "@/app/styles/Header.module.css"

const Header = ({ onInputChange }) => {
    return (
        <div className={styles.Header}>

            <div className={styles.logo}>
                <h1 className={styles.titulo}>WEB-ÁGABO</h1>
            </div>

            <div className={styles.search}>

                <h3 className={styles.subtitulo}>Procurar agentes por nome:</h3>

                <input
                
                    className={styles.input}
                    type="text"
                    placeholder="Digite o agente"
                    onChange={(e) => onInputChange(e.target.value)}
                />
            </div>

        </div>
    );
};

export default Header;