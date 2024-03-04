import './roomBlog.css';
function roomBlog() {
    return (
            <div className="room-blog">
                <div className="room-image">
                    <div className="room-image-head">
                        <a href="lms.fit.hanu.vn">
                            <img className="item-image-image" src="public\images\newyork.png"  alt="house" />
                        </a>
                    </div>
                    <div className="room-tag">
                        
                            <span className="room-status">Available</span>

                            <button className="btn-heart" ></button>
                       
                    </div>
                </div>
                <div className="room-content">
                    <div className="room-description">
                        <a href="lms.fit.hanu.vn">
                            <h3>props.title</h3>
                        </a>
                        <div className="room-row">
                            <p className="room-address">Hanoi</p>
                            <label className="room-type">Apartment</label>
                        </div>
                        <div className="room-price">
                            <p className="room-price">Price: <b> 10 billion</b></p>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default roomBlog;


