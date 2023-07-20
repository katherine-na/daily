const App = () => {
  return (
    <div>
      <header>
        <div className="flex justify-between">
          <h1>Things to do</h1>
          <button>mode</button>
        </div>
        <form className="flex items-center gap-4 overflow-hidden rounded-md bg-white py4- px-4">
          <span className="inline-block h-5 w-5 rounded-full border-2"></span>
          <input type="text" className="w-full text-gray-400 outline-none" placeholder="Create a new todo..."/>
        </form>
      </header>
      <article className="flex gap-4 border-b border-b-gray-400">
        <button>circulo</button>
        <p>Complete Course</p>
        <button>tache</button>
      </article>

      <section className="container mx-auto px-4">
        <div className="bg-white p-4 flex justify-center gap-4">
          <button className="text-blue-500">All</button>
          <button className="hover:text-blue-500" >Active</button>
          <button className="hover:text-blue-500">Complete</button>
        </div>
      </section>
    </div>
  )
}

export default App;