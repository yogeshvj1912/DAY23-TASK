import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCheck,faXmark} from '@fortawesome/free-solid-svg-icons'
 
 function Card({card}) {
    return (
      <div className="col-lg-4">
      <div className="card mb-5 mb-lg-0">
        <div className="card-body">
       
          <h5 className="card-title text-muted text-uppercase text-center">{card.plan}</h5>
          <h6 className="card-price text-center"> ${card.price}<span className="period">/month</span></h6>
          <hr/>
          <ul className="fa-ul">
             {card.feature.map((e)=>{
              
             return <li><span className={`${e.xmark?"light": e.bold? "bold":"" }`}>{e.xmark?<FontAwesomeIcon icon={faXmark}/>:<FontAwesomeIcon icon={faCheck}/>} {e.title}</span></li>
            })}
           </ul>
          <div className="d-grid">
            <a href="#" className="btn btn-primary text-uppercase">Button</a>
          </div>
        </div>
      </div>
    </div>
    );
  };
  
  export default Card;