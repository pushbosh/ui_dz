import "./index.css"

export function Button(props){
    const {size="md",variant = "primary",children} = props
    const className = `my-buttin my-buttin--${variant} my-buttin--${size}`
    return(
        <button className={className }>{children}</button>
    )
}