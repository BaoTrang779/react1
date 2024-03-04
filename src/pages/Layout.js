
import Menu from '../components/Menu/menu';
import { Outlet } from 'react-router-dom';
import Banner from '../components/Banner/banner';
import Footer from '../components/Footer/footer';
function Layout() {
  return (
    <section class="header">
        <Menu/>
        <Banner/>
        <Outlet/>
        <Footer />
    </section>
  );
}
export default Layout;