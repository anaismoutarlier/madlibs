const Button = ({ children, color }) => {  
  return <button style={{ backgroundColor: color }}>
    { children }
  </button>
}

export default Button;