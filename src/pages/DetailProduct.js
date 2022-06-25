import mousepict from '../assets/mouse.png'
import { Button } from "react-bootstrap"

function DetailProduct() {
    return(
        <div className="detail-container row">
            <div className="col-md-6">
                <img src={mousepict} className="img-detail" alt="" />
            </div>
            <div className='col-md-6'>
                <p className='detail-head-text'> Mouse </p>
                <p className='detail-text'> Stock: 600 </p>
                <p className='detail-text'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempor libero ut ligula scelerisque, at cursus libero vulputate. Suspendisse pretium lobortis turpis. Nam dignissim fringilla egestas. Sed elementum nisl vel ex lobortis, et aliquet metus vestibulum. </p>
                <p className='detail-price d-flex justify-content-end'> Rp. 300.000 </p>
                <Button variant="danger" className="button-login-login">Buy</Button>
            </div>
        </div>
    );
  }

export default DetailProduct;