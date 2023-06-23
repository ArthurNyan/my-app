import Home from "@/components/screens/home/Home";
import Header from "@/components/screens/layout/header/Header";
import { NextPage } from "next";
import { useRouter } from "next/router";

const CarPage: NextPage = () => {

    const {asPath, pathname, replace, push} = useRouter()
    console.log(asPath, pathname)
    
    return <div>
        <Header/>
    </div>
}

export default CarPage;