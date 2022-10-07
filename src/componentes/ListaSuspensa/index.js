import './ListaSuspensa.css'

const ListaSuspensa = props => {
  console.log(props.item)

  return (
    <div className="lista-suspensa">
      <label>{props.label}</label>

      <select>
        {props.itens.map(item => {
          return (
            <option
              onChange={evento => props.aoAlterado(evento.target.value)}
              value={props.valor}
              key={item}
            >
              {item}
            </option>
          )
        })}
      </select>
    </div>
  )
}

export default ListaSuspensa
