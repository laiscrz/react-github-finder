import { useState } from 'react';
import { UserProps } from '../../types/user';
import InputField from '../../components/input/input';
import styles from './search.module.css';
import Loader from '../../components/loader/loader';
import Error from '../../components/error/error';
import UserInfo from '../../components/userInfo/userInfo';

const Search = () => {
    const [user, setUser] = useState<UserProps | null>(null)
    const [error, setError] = useState(false)
    const [isLoading, setIsLoading] = useState(false);
    const [searchDone, setSearchDone] = useState(false);

    const loadUser = async (userName: string) => {
        setError(false)
        setUser(null)
        setIsLoading(true);
        setSearchDone(false);

        const res = await fetch(`https://api.github.com/users/${userName}`)
        const data = await res.json();

        setIsLoading(false);
        setSearchDone(true);

        if (res.status === 404) {
            setError(true)
            return
        }

        const { avatar_url, login, location, followers, following } = data

        const userData: UserProps = {
            avatar_url,
            login,
            location,
            followers,
            following,
        }

        setUser(userData);
    }

    return (
        <main className={styles.search}>
            <section className={styles.input_search}>
                <InputField loadUser={loadUser} />
            </section>
            {searchDone && (

                <section className={styles.result}>
                    <>
                        {isLoading && <Loader />}
                        {user && <UserInfo {...user} />}
                        {error && <Error />}
                    </>
                </section>
            )}
        </main>
    );
}

export default Search;
