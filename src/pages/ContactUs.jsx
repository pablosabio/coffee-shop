import Header from "../components/Header"

export default function About() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg">Learn more about our company and mission.</p>
      </main>
    </>
  )
}