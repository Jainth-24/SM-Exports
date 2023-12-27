import { Footer } from "@components/Footer";
import { Header } from "@components/Header";

export const Layout = ({ children, className = "", products }) => {
    return (
        <main
            className={`main relative overflow-hidden ${
                className && className
            }`}
        >
            <Header products={products} />
            {children}
            <Footer />
        </main>
    );
};
