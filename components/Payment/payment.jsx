import styles from './Payment.module.css'
import Link from 'next/link'

const Pay = ()=>{
    return(
        <>
            <div className={styles.wrapper}>
                <h1><Link className={styles.heading} href={'/card'}>Назад</Link></h1>
        <div className={styles.container}>


        <form action="https://app.0xProcessing.com/Payment" method="post">
                        <input type="hidden" name="test" value="false" />
                        <input type="email" name="email" value="test@test.com" />
                        <input type="text" name="name" value="name" />
                        <input type="text" name="lastname" value="lastname" />
                        <input type="hidden" name="amountusd" value="115" />
                        <input type="hidden" name="currency" value="BTC" />
                        <input type="hidden" name="ShopId" value="Asv0232SSd" />
                        <input type="hidden" name="ClientId" value="1000" />
                        <input type="hidden" name="BillingId" value="13304" />
                        <button type="submit">Send</button>
        </form>     

         {/* <form action="https://app.0xprocessing.com/Payment" method="post">
            <input name="amountUsd" type="hidden" value="20" />
            <input name="currency" type="hidden" value="BTC" />
            <input name="shopId" type="text" value="6QsQHcQ6bX" />
            <input name="description" type="text" value="" />
            <input name="emailRequest" type="text" value="true" />
            
            <button type="submit" style="padding: 0 10px; display: flex; justify-content: center; align-items: center; height: 55px; border-radius: 10px; background-color: #1FC530; color: #fff; font-family: GothamProMed; font-size: 16px; cursor: pointer; border: none; margin: 10px;">
              <img src="https://app.0xprocessing.com/img/button.png" style="height:80%"/>
            </button>         
        </form> */}
        </div>
   </div>
        </>
    )
}

export default Pay