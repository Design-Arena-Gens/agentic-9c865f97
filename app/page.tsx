import CatIllustration from '../components/CatIllustration';
import styles from './page.module.css';

const Page = () => {
  return (
    <main className={styles.page}>
      <section className={styles.content}>
        <h1 className={styles.title}>Gato alegre y elegante</h1>
        <p className={styles.intro}>
          Una propuesta de identidad visual con un gato sofisticado que irradia alegría. Sus manchas combinan tonos
          crema, beige, gris, negro y blanco, manteniendo una estética limpia sobre un fondo puro.
        </p>
        <p className={styles.caption}>
          Perfecto para marcas modernas que buscan un símbolo felino refinado y cálido.
        </p>
      </section>
      <section className={styles.art}>
        <CatIllustration className={styles.cat} />
      </section>
    </main>
  );
};

export default Page;
