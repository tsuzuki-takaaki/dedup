import type { A } from "./types"

export const ComponentC = async () => {
  const a = await fetch("http://localhost:4567", { cache: "no-store"})
  const b = await a.json() as A

  return (
    <div>
      <p>id: {b.id}</p>
      <p>name: {b.name}</p>
    </div>
  )
}
