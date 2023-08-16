import style from "./Lista.module.scss"
import Item from "./Item";
import ITarefa from "../../types/tarefa"

interface props {
	tarefas: ITarefa[],
	selecionaTarefa: (tarefaSelecionada: ITarefa) => void;
}

function Lista({tarefas, selecionaTarefa}: props) {

	return (
		<aside className={style.listaTarefas}>
			<h2>
				Estudos do Dia
			</h2>
			<ul>
				{tarefas.map((item) => (
					<Item
						selecionaTarefa={selecionaTarefa}
						key={item.id}
						{...item}
					/>
				))
				}
			</ul>
		</aside>
	)
}

export default Lista;