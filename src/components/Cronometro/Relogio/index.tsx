import style from "./Relogio.module.scss"

interface Props {
    tempo: number | undefined
}

export default function Relogio ( {tempo = 0} : Props ){

    const segundos = Math.floor((tempo%60))
    const minutos = Math.floor((tempo/60));
    
    const minutoDezena = Math.floor(minutos/10)
    const minutoUnidade = minutos%10
    const segundoDezena = Math.floor(segundos/10)
    const segundoUnidade = segundos%10

return (
    <>
        <span className={style.relogioNumero}>{minutoDezena}</span>
        <span className={style.relogioNumero}>{minutoUnidade}</span>        
        <span className={style.relogioDivisao}>:</span>
        <span className={style.relogioNumero}>{segundoDezena}</span>
        <span className={style.relogioNumero}>{segundoUnidade}</span>
    </>
    )
}