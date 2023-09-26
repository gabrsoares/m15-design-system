const Button = ({ props }) => {

    const color = `action${props.variation}`
    const bgColor = `bg-action${props.variation}`

    return <button className={`${color} ${bgColor}`}></button>
}

export default Button