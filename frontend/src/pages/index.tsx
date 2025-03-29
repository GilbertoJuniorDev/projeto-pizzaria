import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Bem-vindo à Pizzaria!</h1>
      <p>As melhores pizzas da cidade</p>

      <Link href="/login">
        Fazer Login
      </Link>
    </div>
  );
}