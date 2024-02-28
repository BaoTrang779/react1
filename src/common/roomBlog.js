import '../assets/style/roomBlog.css';
function roomBlog() {
    return (
            <div class="item-block">
                <div class="">
                    <div class="item-image-head">
                        <a href="https://cenhomes.vn/du-an/icon-40-10000658">
                            <img class="item-image" src="https://img.cenhomes.vn/2022/10/1666079824-2.jpg"  alt="house" />
                        </a>
                    </div>
                    <div class="item-tag">
                        
                            <span class="new">Available</span>

                            <button class="btn__heart" ></button>
                       
                    </div>
                </div>
                <div class="item-content">
                    <div class="item-description">
                        <a href="https://cenhomes.vn/du-an/icon-40-10000658">
                            <h3>props.title</h3>
                        </a>
                        <div class="item-row">
                            <p class="item-address">Hanoi</p>
                            <label class="item-type">Apartment</label>
                        </div>
                        <div class="item-price">
                            <p class="item-price">Price: <b> 10 billion</b></p>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default roomBlog;


