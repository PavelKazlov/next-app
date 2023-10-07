import Link from "next/link";
import ProductCard from "./components/ProductCard/ProductCard";
import HeavyComponent from "./components/HeavyComponent";

export default function Home() {
  return (
    <main>
      <h1>Hello World</h1>
      <Link href={"/users"}>Users</Link>
      <ProductCard />
      <HeavyComponent />
    </main>
  );
}
