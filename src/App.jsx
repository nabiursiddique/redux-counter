import Counter from "./components/Counter/Counter"

const App = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-500">
      <div className="h-screen flex items-center justify-center">
        <div>
          <h1 className="text-center text-3xl text-white font-bold">Redux Counters</h1>
          <Counter />
        </div>
      </div>
    </div>
  )
}

export default App
