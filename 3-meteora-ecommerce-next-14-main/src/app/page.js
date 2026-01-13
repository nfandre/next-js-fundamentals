import styles from "./page.module.css";
import { Categorias } from "./components/Categorias";
import { Produtos } from "./components/Produtos";

async function fetchProdutosApi() {
  const res = await fetch('https://api.npoint.io/01b059af838f189a0632/produtos');
  if(!res.ok){
    throw new Error('Não foi possível obter os dados');
  }
  const produtos = await res.json();

  return produtos;
}

async function fetchCategoriasApi() {
  const res = await fetch('https://api.npoint.io/5ad573596e9a751f0b6f/categorias');
  if(!res.ok){
    throw new Error('Não foi possível obter os dados');
  }
  const categorias = await res.json();

  return categorias;
}

export default async function Home() {
  const produtos = await fetchProdutosApi();
  const categorias = await fetchCategoriasApi();

  return (
    <>
      <main className={styles.main}>
        <Categorias categorias={categorias} />
        <Produtos produtos={produtos} />
      </main>
    </>
  );
}
