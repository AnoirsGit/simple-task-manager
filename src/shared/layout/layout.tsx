import { ReactNode } from "react";
import Header from "./header";

const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <>
        <Header></Header>
        <div className="page-layout-content mt-20">
            {children}
        </div>
        </>
    )
}

export default Layout;