import "bootstrap/dist/css/bootstrap.css";
import "./globals.css";
import Link from "next/link";
import Navbar from "@/Components/Navbar";

const metadata = {
  title: "PokeDex",
  description: "Next.JS Pokedex",
};

let currentDate = new Date();
let currentYear = currentDate.getFullYear();

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className="bg-dark text-white">
        <header className="bg-secondary d-flex justify-content-evenly">
          <Link href="/Login">
            <button type="button" className="shadow btn btn-danger btn-lg m-2 p-2">
              Login
            </button>
          </Link>

          <Link href="/Games">
            <button type="button" className="shadow btn btn-warning btn-lg m-2 p-2">
              Games
            </button>
          </Link>

          <Link href="/pokemon">
            <button type="button" className="shadow btn btn-info btn-lg m-2 p-2">
              PokeDex
            </button>
          </Link>
        </header>

        <Navbar />

        <div className="col p-2 px-5 d-flex justify-content-center">
          <div>
            <button type="button" className="btn btn-outline-light btn-lg fs-6 row-md-3 m-1">
              Kanto
            </button>
            <button type="button" className="btn btn-outline-light btn-lg fs-6 row-md-3 m-1">
              Johto
            </button>
            <button type="button" className="btn btn-outline-light btn-lg fs-6 row-md-3 m-1">
              Hoenn
            </button>
            <button type="button" className="btn btn-outline-light btn-lg fs-6 row-md-3 m-1">
              Sinnoh
            </button>
            <button type="button" className="btn btn-outline-light btn-lg fs-6 row-md-3 m-1">
              Unova
            </button>
            <button type="button" className="btn btn-outline-light btn-lg fs-6 row-md-3 m-1">
              Kalos
            </button>
            <button type="button" className="btn btn-outline-light btn-lg fs-6 row-md-3 m-1">
              Alola
            </button>
            <button type="button" className="btn btn-outline-light btn-lg fs-6 row-md-3 m-1">
              Galar
            </button>
          </div>
        </div>

        {children}

        <footer className="bg-black">
          <div className="d-flex justify-content-center">
            <img className="m-3" src="/Rev.png" width={150} height={100} alt="logo" />
          </div>
          <div className="d-flex justify-content-center badge badge-pill bg-dark">
            {currentYear} is the current year
          </div>
        </footer>
      </body>
    </html>
  );
}
