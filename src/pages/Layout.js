
import Menu from '../components/Menu/menu';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/footer';
function Layout() {
  return (
    <div class="container">
        <Menu/>
        <Outlet/>
        <Footer />
    </div>
  );
}
export default Layout;