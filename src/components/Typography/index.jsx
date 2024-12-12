import "./index.css";
export function Typography(props){
    const {size,variant = "primary",label} = props
    const className = `typo typo--${size} my-typo--${size}`
    const classLabel = `typo--label`
    return(
        <div>   
            <p className={className}> {size.toUpperCase()}. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        
    )
}