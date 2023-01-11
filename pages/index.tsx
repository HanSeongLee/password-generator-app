import type { NextPage } from 'next'
import styles from './style.module.scss';
import Container from 'components/Container';
import PasswordGeneratorContainer from 'containers/PasswordGeneratorContainer';

const Home: NextPage = () => {
    return (
        <>
            <main className={styles.main}>
                <Container>
                    <h1 className={styles.title}>
                        Password Generator
                    </h1>
                    <PasswordGeneratorContainer className={styles.passwordGeneratorContainer} />
                </Container>
            </main>
        </>
    );
}

export default Home
