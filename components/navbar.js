function navbar(){
    return `    <!-- navbar start -->
    <div class="nav">
        <div class="one">
            <div class="logo"><img src="./assets/logo.png" alt=""></div>
            <div class="menu"><p>SHOP BY CATAGORY<i class="fas fa-angle-down"></i></p></div>
        </div>
        <div class="two">
            <div class="num"><span><i class="fas fa-phone-alt"></i></span><span> 1860 123 1000</span></div>
            <div class="search"><input type="text" id="searchbar" placeholder="Search for Products"><button id="btn"><i class="fas fa-search"></i></button></div>
            <div class="offers"><span class="ofr"><i class="fas fa-tag"></i> OFFERS</span> <span class="spcl"><i class="fas fa-home"></i> BB SPECIALITY</span></div>
        </div>
        <div class="three">
            <div class="location"><i class="fas fa-map-marker-alt"></i> <span>560004, Bangalore <i class="fas fa-angle-down"></i></span> <i class="far fa-user"></i><a href="">Login/Sign Up</a></div>
            <button class="btn1"><i class="fas fa-shopping-basket fa-3x"></i> <span><sup>My Basket</sup></span><p>0 items</p></button>
        </div>
    </div>
    
    <!-- navbar end -->`
}
export default navbar