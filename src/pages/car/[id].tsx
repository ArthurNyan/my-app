import Home from "@/components/screens/home/Home";
import Header from "@/components/screens/layout/header/Header";
import Meta from "@/components/seo/Meta";
import { NextPage } from "next";
import { useRouter } from "next/router";

const CarPage: NextPage = () => {

    const {query} = useRouter()
    
    return <Meta title={`Car ${query.id}`}>
        <Header/>
    </Meta>
}

export default CarPage;