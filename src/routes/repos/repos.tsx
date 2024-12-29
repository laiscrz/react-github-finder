import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from './repos.module.css';
import Loader from "../../components/loader/loader";
import { RepoProps } from "../../types/repo";
import CardRepo from "../../components/cardRepo/cardRepo";
import imageRepos from '../../assets/fundo_repos.jpg';

const Repos = () => {
    const { username } = useParams();
    const [repos, setRepos] = useState<RepoProps[] | [] | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const loadRepos = async (username: string) => {
            setIsLoading(true);

            const res = await fetch(`https://api.github.com/users/${username}/repos`);
            const data = await res.json();

            setIsLoading(false);

            let orderedRepos = data.sort(
                (a: RepoProps, b: RepoProps) => b.stargazers_count - a.stargazers_count
            );

            orderedRepos = orderedRepos.slice(0, 5);
            setRepos(orderedRepos);
        };

        if (username) {
            loadRepos(username);
        }
    }, [username]);

    if (!repos && isLoading) return <Loader />;
    return (
        <main className={styles.repos}  style={{ backgroundImage: `url(${imageRepos})` }}>
            <h2>Explore os repositórios do usuário: <span>{username}</span></h2>
            {repos && repos.length === 0 && <p>Não há repositórios.</p>}
            {repos && repos.length > 0 && (
                <div className={styles.repos_container}>
                    {repos.map((repo: RepoProps) => (
                        <CardRepo key={repo.name} {...repo} />
                    ))}
                </div>
            )}
        </main>
    );
};

export default Repos;
