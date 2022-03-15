
import styles from'./Card.module.css'

const Card = (props) => {
    // props.children nos fornece o conteúdo que está dentro das tags de abertura e fechamento
  return <div className={`${styles.card} ${props.className}`}>{props.children}</div>;
};

export default Card;
