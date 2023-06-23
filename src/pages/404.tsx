import Layout from "@/components/screens/layout/Layout";
import { NextPage } from "next";
import Head from "next/head";
import Image from 'next/image'


const NotFaund: NextPage = () => {
    return(
    <>
    <Head>
        <title>Not Found</title>
    </Head>
    <Layout title="Not Found">
        <Image src='/404.png' width={920} height={462} alt={"plp"} />
    </Layout>
    </>
)}

export default NotFaund