import IconBell from '../icons/IconBell'
import IconBookmark from '../icons/IconBookmark'
import IconCart from '../icons/IconCart'
import IconExplore from '../icons/IconExplore'
import IconSearch from '../icons/IconSearch'
import IconHobbies from '../icons/IconHobbies'
import './header.style.css'

function Header() {
    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid p-0 gap-4">
                    <a className="navbar-brand" href="#"><img src="images/HobbyCueLogo.png" alt="" /></a>

                    <div className="form-group form-group-md d-none d-lg-block w-100">
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Search here..." aria-label="Recipient's username" aria-describedby="button-addon2" />
                            <button className="btn" type="button" id="invite"><i class="bi bi-search"></i></button>
                        </div>
                    </div>
                    <div className='d-flex align-items-center'>
                        <div className="nav-item form-group form-group-sm d-block d-lg-none">
                            <button className="" type="button" style={{backgroundColor: "transparent", border: "none"}}><IconSearch /></button>
                        </div>
                        <div className="nav-item d-block d-lg-none">
                            <a className="nav-link" aria-current="page" href="#"><IconBell /></a>
                        </div>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 w-100 justify-content-end gap-2">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle d-flex align-items-center gap-2" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <span className='d-flex align-items-center gap-1'><IconExplore />Explore</span>
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">People - Community</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Places - Venues</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Programs - Events</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Products - Store</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Blogs</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle d-flex align-items-center gap-2" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <span className='d-flex align-items-center gap-1'><IconHobbies />Hobbies</span>
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#"><IconBookmark /></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#"><IconBell /></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#"><IconCart /></a>
                            </li>
                            <li className="nav-item">
                                <button className="btn btn-outline sign-in-btn">Sign In</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header