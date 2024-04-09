import { Hero, Nav } from './components'

function App() {
  return (
    <main className="relative">
      <Nav />
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero />
      </section>
    </main>
  )
}
export default App
