import Layout from "../layout";
import styles from "./loading.module.css";
export default function Loading({}) {
    return (
        <>
        <Layout title="Loading">
            <span className={styles.oader}></span>
        </Layout>
        </>
    )
}