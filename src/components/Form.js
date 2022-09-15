const Form = ({ handleSubmit, data, isDisabled, setValues, values }) => {
  console.log(data.length)
  const submit = e => {
    e.preventDefault();
    handleSubmit()
  }

  const handleChange = e => setValues(values => ({ ...values, [e.target.name]: e.target.value }))
  return (
    <form onSubmit={ submit }>
      {
        data.map((el) => {
          return (
            <div className="input-container">
              <label htmlFor={el.key}>{el.label}</label>
              <input name={el.key} id={el.key} onChange={ handleChange } value={ values[el.key] || "" } />
            </div>
          )
        })
      }
      <button id="submit-button" type="submit" disabled={ isDisabled }>SUBMIT</button>
    </form>
  )
}

export default Form;