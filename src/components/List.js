import { useState } from "react"
import { BsCircle } from "react-icons/bs"
import check from "../images/icon-check.svg"
import cross from "../images/icon-cross.svg"

const List = ({ items, deleteItem, setItems }) => {
  const [isCompleted, setIsCompleted] = useState(false)

  return (
    <article className="px-10 my-10 sm:max-w-xl md:mx-auto">
      {items.length !== 0 && (
        <ul className="bg-gray-800 rounded-lg">
          {items.map(({ id, title }) => (
            <ul
              key={id}
              className="list flex items-center justify-between border-b border-gray-700 cursor-pointer py-3 pl-4 pr-2"
            >
              <li
                className="text-white"
                onClick={() => setIsCompleted(!isCompleted)}
              >
                {isCompleted ? (
                  <button className="p-1 mr-2 bg-gradient-to-b from-pink-300 to-blue-400 border border-gray-400 rounded-full">
                    <img src={check} alt="" className="w-4 h-4" />
                  </button>
                ) : (
                  <button className="p-1 mr-2 border-gray-200 rounded-full">
                    <BsCircle />
                  </button>
                )}

                {title}
              </li>
              <button onClick={() => deleteItem(id)}>
                <img src={cross} alt="" className="w-4 cross" />
              </button>
            </ul>
          ))}
          <div className="flex items-center justify-between py-3 px-5 text-gray-400">
            <p className="text-sm">{items.length} items left</p>
            <ul className="flex">
              <li>
                <button className="text-sm mx-1">All</button>
              </li>
              <li>
                <button className="text-sm mx-1">Active</button>
              </li>
              <li>
                <button className="text-sm mx-1">Completed</button>
              </li>
            </ul>
            <p>
              <button className="text-sm" onClick={() => setItems([])}>
                Clear completed
              </button>
            </p>
          </div>
        </ul>
      )}
    </article>
  )
}

export default List
