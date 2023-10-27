import { useState, useEffect } from "react"
import { BsCircle } from "react-icons/bs"
import { v4 as uuidv4 } from "uuid"
import List from "./components/List"
import Logo from "./components/Logo"
import Showcase from "./components/Showcase"

const getLocalStorage = () => {
  let items = localStorage.getItem("items")

  if (items) {
    return JSON.parse(localStorage.getItem("items"))
  } else {
    return []
  }
}

function App() {
  const [text, setText] = useState("")
  const [items, setItems] = useState(getLocalStorage())

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!text) {
      alert("Input is empty")
    } else {
      const newItems = {
        id: uuidv4(),
        title: text,
      }
      setItems([newItems, ...items])
      setText("")
    }
  }

  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id))
  }

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items))
  }, [items])

  return (
    <main>
      <Logo />
      <Showcase />

      <form
        className="flex items-center justify-center mt-10"
        onSubmit={handleSubmit}
      >
        <div className="relative flex items-center">
          <BsCircle className="text-gray-400 absolute left-3" />
          <input
            type="text"
            name="text"
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Create a new todo"
            className="w-64 rounded-lg text-gray-400 bg-gray-700 py-2 pl-10 pr-5 sm:w-96"
          />
        </div>
      </form>

      <List items={items} deleteItem={deleteItem} setItems={setItems} />
    </main>
  )
}

export default App
