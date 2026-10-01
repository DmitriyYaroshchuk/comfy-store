import {Outlet, useNavigation} from "react-router-dom";
import Header from "@/components/Header.tsx";
import Navbar from "@/components/Navbar.tsx";
import Loading from "@/components/Loading.tsx";

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
            <footer>
                Footer
            </footer>
        </>
    )
}
export default HomeLayout;