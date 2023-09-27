import './styles.css'

const Button = (props) => {

    const color = `action-${props.variation}`
    const bgColor = `bg-action-${props.variation}`
    const bColor = `b--action-${props.variation}`
    const bSize = `size-action-${props.size}`

    return <button className={`${color} ${bgColor} ${bColor} ${bSize} btn br2 pv1 ph3`}>
             {props.children}
           </button>
}

export default Button