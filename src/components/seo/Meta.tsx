import Head from "next/head";
import { FC, PropsWithChildren } from "react";

const getTitle = (title: string) => `${title} | Aaryan`

const Meta: FC<PropsWithChildren<IMeta>> = ({ title, description, children }) => {
    return <>
        <Head>
            <title>{getTitle(title)}</title>
            {description ? (
                <>
                    <meta name="description" content={description} />
                </>) : <meta name="robots" content="noindex, nofollow" />
            }
        </Head>
        {children}
    </>
}

export default Meta