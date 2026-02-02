import Link from "next/link";

export default async function Home() {
  return (
    <>
      <h1 className="text-3xl font-bold">Página principal</h1>

      <div className="flex flex-col items-start">
        <Link href="/admin" className="text-blue-700">
          Panel de admin
        </Link>
        <Link href="/dashboard" className="text-blue-700">
          Dashboard del usuario
        </Link>
        <Link href="/productos" className="text-blue-700">
          Productos
        </Link>
        <Link href="/proveedores" className="text-blue-700">
          Proveedores
        </Link>
        <Link href="/about" className="text-blue-700">
          About
        </Link>
      </div>

    </>
  )
}

