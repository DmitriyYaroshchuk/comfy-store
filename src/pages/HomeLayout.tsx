import {Outlet, useNavigation} from "react-router-dom";
import Header from "@/components/Header.tsx";
import Navbar from "@/components/Navbar.tsx";
import Loading from "@/components/Loading.tsx";
import Footer from "@/components/Footer.tsx";

function HomeLayout() {
    const navigation = useNavigation();
    const isLoadingPage = navigation.state === "loading";
    return (
        <>
            <Header/>
            <Navbar/>
            <div className='align-element py-20'>
                {
                    isLoadingPage ? <Loading/> : <Outlet/>
                }

            </div>
            <Footer/>
        </>
    )
}
export default HomeLayout;