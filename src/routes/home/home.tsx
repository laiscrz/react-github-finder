import styles from './home.module.css';
import { FaUserAlt, FaStar, FaSearch } from 'react-icons/fa';

const Home = () => {
  return (
    <main className={styles.home}>
      <section className={styles.section}>
        <div className={styles.content}>
          <div className={styles.text}>
            <h1 className={styles.title}>Bem-vindo ao GitHub Finder</h1>
            <p className={styles.description}>
              Encontre repositórios e perfis incríveis no GitHub de forma fácil e rápida.
            </p>
            <span className={styles.cta}>
              <a href="/search" className={styles.button}>Comece Agora</a>
            </span>
          </div>
          <div className={styles.image}>
            <img 
              src="./src/assets/octocat_github.png" 
              alt="Ilustração de pesquisa no GitHub" 
              className={styles.img}
            />
          </div>
        </div>
      </section>

      <section className={styles.features}>
        <h2 className={styles.featuresTitle}>O que você pode fazer</h2>
        <div className={styles.cards}>
          <div className={styles.card}>
            <FaSearch className={styles.icon} />
            <h3>Pesquisar Usuários</h3>
            <p>Descubra informações detalhadas sobre qualquer usuário do GitHub.</p>
          </div>
          <div className={styles.card}>
            <FaStar className={styles.icon} />
            <h3>Ver Repositórios</h3>
            <p>Explore os repositórios mais populares e veja detalhes sobre eles.</p>
          </div>
          <div className={styles.card}>
            <FaUserAlt className={styles.icon} />
            <h3>Perfis Personalizados</h3>
            <p>Obtenha uma visão completa dos perfis, incluindo seguidores e mais.</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
