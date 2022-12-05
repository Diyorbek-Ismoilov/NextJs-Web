import styles  from '../Card/Card.module.css'
import Link from 'next/link';


function Card() {
    return (
     <>
      <div className={styles.container}>
          <div className={styles.animation}></div>
          <div className={styles.description}>Пропуск на 5 раз</div>
          <div > 
            <Link className={styles.btn} href="/payment">Buy</Link>
          </div>
      </div>
     </>
    );
  }
  
  export default Card;