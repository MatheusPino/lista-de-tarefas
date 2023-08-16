import React, { useState } from 'react';
import Form from '../components/Form';
import Lista from '../components/Lista';
import style from "./App.module.scss"
import Cronometro from '../components/Cronometro';
import ITarefa from '../types/tarefa';

function App() {
  const [tarefas, setTarefas] = useState<ITarefa[]>([]);
  const [selecionado, setSelecionado] = useState<ITarefa>();

  function selecionaTarefa(tarefaSelecionada: ITarefa) {
    setSelecionado(tarefaSelecionada);
    setTarefas(tarefasAntigas => tarefasAntigas.map(tarefa => ({
      ...tarefa,
      selecionado: tarefaSelecionada.id === tarefa.id ? true : false
    })))
  }

  function finalizarTarefa() {
    if (selecionado) {
      setSelecionado(undefined);
      setTarefas(tarefasAnteriores =>
        tarefasAnteriores.map(tarefa => {
          if (tarefa.id === selecionado.id) {
              return {
              ...tarefa,
              selecionado : false,
              completado: true
              }
            }
          return tarefa;
  }))
}
  }

return (
  <div className={style.AppStyle}>
    <Form setTarefas={setTarefas} />
    <Cronometro finalizarTarefa={finalizarTarefa}
      selecionado={selecionado} />
    <Lista
      tarefas={tarefas}
      selecionaTarefa={selecionaTarefa}
    />
  </div>
);
}

export default App;
