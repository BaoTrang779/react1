import './Blogs.css';
import roomBlog from './RoomBlog/roomBlog';
function Blogs() {
    return (
        <section className="Blog-container">
            <div className="blogs-header">
                <h1>7Tro News</h1>
                <div className="body-des">
                    <img src="images/newyork.png" alt='house' />
                    <span>
                        Welcome to the house- renting Management System,

                        The system is designed to change the house- renting experience with new methods. The system takes advantage of the strengths of Information Technology in searching and accessing to improve training efficiency.

                        The modules are built with training goals in mind, with beautifully designed multimedia content and interactive questions about real projects to help students review and know how to apply knowledge in practice.
                    </span>
                </div>

            </div>
            <div className='roomCard'>
                <roomBlog/>
            </div>



        </section>
    );
}

export default Blogs;