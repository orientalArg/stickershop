function Home() {

    return (
    <>
        <div className="hero">
        <div className="announcements">Announcements</div>
        <div className="welcome">
            <p>Sticker</p>
            <p>Sticker</p>
        </div>
        <img src="/img/R.jpg" alt="" />
        </div>

        <div className="products">
        <span className="products_title">
            <h1>Products</h1> 
            <div>
            <button className="nav_btn" ><img src="/img/left.png" alt="" /></button>
            <button className="nav_btn" ><img src="/img/right.png" alt="" /></button>
            </div>
        </span>
        <ul>
            <li className="card">
            <img src="/img/car.png" alt="" />
            <p>Large Title</p>
            <h9>#id123</h9>
            <b>
                <p>$ 18,88</p>
            </b>
            <button>Buy</button>
            </li> <li className="card">
            <img src="/img/car.png" alt="" />
            <p>Large Title</p>
            <h9>#id123</h9>
            <b>
                <p>$ 18,88</p>
            </b>
            <button>Buy</button>
            </li> <li className="card">
            <img src="/img/car.png" alt="" />
            <p>Large Title</p>
            <h9>#id123</h9>
            <b>
                <p>$ 18,88</p>
            </b>
            <button>Buy</button>
            </li> <li className="card">
            <img src="/img/car.png" alt="" />
            <p>Large Title</p>
            <h9>#id123</h9>
            <b>
                <p>$ 18,88</p>
            </b>
            <button>Buy</button>
            </li>
        </ul>
        </div>

        <div className="new">
        <div className="new_title">
            <h1>New</h1> 
            <div>
            <button className="nav_btn"><img src="/img/left.png" alt="" /></button>
            <button className="nav_btn"><img src="/img/right.png" alt="" /></button>
            </div>
        </div>
        <ul>
            <li>
            <img src="/img/car.png" alt="" />
            <p>Large Title</p>
            <h9>#id123</h9>
            <b>
                <p>$ 18,88</p>
            </b>
            <button>Buy</button>
            </li> <li>
            <img src="/img/car.png" alt="" />
            <p>Large Title</p>
            <h9>#id123</h9>
            <b>
                <p>$ 18,88</p>
            </b>
            <button>Buy</button>
            </li> <li>
            <img src="/img/car.png" alt="" />
            <p>Large Title</p>
            <h9>#id123</h9>
            <b>
                <p>$ 18,88</p>
            </b>
            <button>Buy</button>
            </li> <li>
            <img src="/img/car.png" alt="" />
            <p>Large Title</p>
            <h9>#id123</h9>
            <b>
                <p>$ 18,88</p>
            </b>
            <button>Buy</button>
            </li>
        </ul>
        </div>

        <div className="features">
        <div>
            <img src="/img/card.svg" alt="" />
            <p>Multiple Payment Methods</p>
        </div>
        <div>
            <img src="/img/shield.svg" alt="" />
            <p>Secured Transactions</p>
        </div>
        <div>
            <img src="/img/return1.svg" alt="" />
            <p>Return Payments</p>
        </div>
        </div>

        <div className="contact">
        <div>
            <h1>Contact Us</h1>
        </div>
        <div>
            <p>Send an email with your information, someone will contact you.</p>
        </div>
        <div>
            <input type="email" name="" id="" placeholder="Email"/>
        </div>
        <div>
            <button>Type E-Mail</button>
        </div>
        </div>
    </>
  );
}

export default Home;