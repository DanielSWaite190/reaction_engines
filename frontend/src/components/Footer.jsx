import { Link } from 'react-router-dom';

export default function Footer() {
    
    return(
        <div class="container text-center">
            <div class="row align-items-start">
                <div className="col link-btn-user btn">
                    <a href="https://www.spacex.com/" className='nav-link active'>SpaceX</a>
                </div>
                <div className="col link-btn-user btn">
                    <a href="https://www.blueorigin.com/" className='col nav-link active'>Blue Origin</a>
                </div>
                <div className="col link-btn-user btn">
                    <a href="https://firefly.com/" className='col nav-link active'>Firefly</a>
                </div>
            </div>
        </div>
    )   
}