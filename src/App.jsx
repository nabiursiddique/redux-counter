import Counter from "./components/Counter/Counter"

const App = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-500">
      <div className="h-full flex items-center justify-center py-10">
        <div>
          <h1 className="text-center text-4xl text-white font-bold mb-5 ">Redux Counters</h1>
          {/* Basic Counter  */}
          <h3 className="text-center text-xl text-white font-bold">Basic Counter</h3>
          <Counter />
          {/* Dynamic Counter  */}
          <h3 className="text-center text-xl text-white font-bold mt-16">Dynamic Counter</h3>
          <Counter />
        </div>
      </div>
    </div>
  )
}

export default App
