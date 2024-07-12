import Layout from "@/components/layout/Layout"
import About2 from "@/components/sections/About2"
import Banner2 from "@/components/sections/Banner2"
import Coinlist2 from "@/components/sections/Coinlist2"
import Crypto1 from "@/components/sections/Crypto1"
import Services1 from "@/components/sections/Services1"
import Work1 from "@/components/sections/Work1"
export default function Home2() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={2}>
                <Banner2 />
                <Crypto1 />
                <Services1 />
                <Coinlist2 />
                <Work1 />
                <About2 />
            </Layout>
        </>
    )
}