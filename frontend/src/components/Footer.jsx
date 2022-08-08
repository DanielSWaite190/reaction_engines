import { Link } from 'react-router-dom';

export default function Footer() {
    
    return(
        <div class="container text-center">
            <div class="row align-items-start">
                <div className="col link-btn-user ">
                    <a href="https://www.spacex.com/" className='nav-link active'>SpaceX</a>
                </div>

                <a href="https://www.blueorigin.com/" className='col nav-link active'>Blue Origin</a>
                <a href="https://firefly.com/" className='col nav-link active'>Firefly</a>
            </div>

        </div>
    )
    
    return(
        <nav class="navbar navbar-expand-lg bg-light">
            <div class="container-fluid">
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/new">Add A Engine</a>
                </li>
                </ul>
            </div>
            </div>
        </nav>
    )

    return (
        <div className="footer-basic">
            <footer>
                <ul className="footer_list">
                    <li className="footer_element">About</li>
                    <li className="footer_element">Home</li>
                    <li className="footer_element">Contact</li>
                </ul>
                <p className="copyright">Copyright © 2022</p>
            </footer>
        </div>
    )
}