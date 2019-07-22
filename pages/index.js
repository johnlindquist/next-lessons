import { useState } from "react"

export default () => {
  const [value, setValue] = useState({ message: "Waiting for message..." })

  const fetchValue = async event => {
    const response = await fetch("/api/hello")

    setValue(await response.json())
  }

  return (
    <div>
      <div>{value.message}</div>
      <button onClick={fetchValue}>Fetch value</button>
    </div>
  )
}
