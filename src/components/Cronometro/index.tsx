import Button from "../Button";
import Relogio from "./Relogio";
import style from "./Cronometro.module.scss"
import ITarefa from "../../types/tarefa";
import { useState, useEffect } from 'react';
import tempoParaSegundos from "../../common/utils/time";

interface Props {
    selecionado: ITarefa | undefined,
    finalizarTarefa: () => void
}

export default function Cronometro( { finalizarTarefa, selecionado }: Props) {
    const [time, setTime] = useState<number>();

    useEffect(() => {

        if (selecionado?.tempo) {
            setTime(tempoParaSegundos(selecionado.tempo))
        }
    }, [selecionado]);

    function regressiva(contador: number = 0) {
        setTimeout(() => {
            if (contador > 0) {
                setTime(contador - 1);
                return regressiva(contador - 1);
            }
            finalizarTarefa();
        }, 1000);
    }

    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>
                Escolha um card e inicie o cronometro:
            </p>
            <div className={style.relogioWrapper}>
                <Relogio
                    tempo={time} />
            </div>
            <Button
                onClick={() => regressiva(time)} >
                Começar!
            </Button>
        </div>
    )
}