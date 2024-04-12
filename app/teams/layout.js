import Link from "next/link";

export default function DatabaseLayout({ children }) {
  return (
    <div className="ml-24">
      <div className="flex flex-row justify-end space-x-12 mx-12 px-4">
        <Link href="/teams" className="link secondary">
          Voir tout
        </Link>
        <Link href="/teams/view" className="link secondary">
          Voir
        </Link>
        <Link href="/teams/create" className="link secondary">
          Créer
        </Link>
      </div>
      {children}
    </div>
  );
}
