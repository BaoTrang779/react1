
import Menu from '../common/menu';
import { Outlet } from 'react-router-dom';
import Banner from '../layout/banner';
import Footer from '../layout/footer';
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