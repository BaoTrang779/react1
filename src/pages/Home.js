import '../assets/style/Home.css';
import Menu from '../common/menu';
import roomSearch from '../common/roomSearch';


function Home() {
  return (
    <div class="intro">
      <roomSearch />
    </div>
  );
}

export default Home;