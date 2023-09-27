import './styles.css'

const Select = (props) => {

    const color = `color-action-${props.variation}`
    const bColor =  `b--action-${props.variation}`
    const size = `size-action-${props.size}`

    return (
        <div className='selectDS'>
            <label className={`${color} ${size}`} for={props.id}>{props.labelText}</label>
            <select className={`${color} ${bColor} ${size} w4`} id={props.id}>
                {props.children}
            </select>
        </div>
        
    )
}

export default Select;