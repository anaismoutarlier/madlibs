const Story = ({ story, values }) => {
  const generateText = (data,text) => {
    let result = text;
    for (const key in data) {
      result = result.replace(`{${key}}`, data[key])
    }

    return result
  }

  return (
    <div className="story-result">
      {generateText(values, story)}
    </div>
  )
}

export default Story;