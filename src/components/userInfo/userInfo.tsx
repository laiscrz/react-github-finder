import { MdLocationPin } from "react-icons/md";
import { UserProps } from "../../types/user"
import styles from './userInfo.module.css'
import { Link } from "react-router-dom"

const UserInfo = ({
    login,
    avatar_url,
    location,
    followers,
    following
}: UserProps) => {
    return (
        <div className={styles.user}>
            <div className={styles.profile}>
                <img src={avatar_url} alt={login} />
            </div>
            <div className={styles.details}>
                <h2>{login}</h2>
                {location && (
                    <p className={styles.location}>
                        <MdLocationPin />
                        <span>{location}</span>
                    </p>
                )}

                <div className={styles.stats}>
                    <div>
                        <p>Seguidores: </p>
                        <p className={styles.number}>{followers}</p>
                    </div>
                    <div>
                        <p>Seguindo: </p>
                        <p className={styles.number}>{following}</p>
                    </div>
                </div>
                <Link to={`/repos/${login}`}>Ver melhores projetos</Link>
            </div>

        </div>
    )
}

export default UserInfo