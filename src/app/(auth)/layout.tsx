export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col">
      <header>
        <h1>My App</h1>
      </header>
      <main>{children}</main>
      <footer>
        <p>© 2021</p>
      </footer>
    </div>
  )
}
