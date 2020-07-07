import React from 'react';
import M from "materialize-css";

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.modal');
   M.Modal.init(elems);
});

function Footer() {
  return (
      <div>
      <footer class="page-footer">
      <div class="container">
          <div class="row">
          <a class="waves-effect waves-light btn modal-trigger" href="#modal1">Contact</a>


           <div id="modal1" class="modal bottom-sheet">
           <div class="modal-content">
           <h4>Contact Info</h4>
           
           <p><i className="material-icons">phone</i>(480)800-7959</p>
                   <p><i className="material-icons">email</i>bigdpower@icloud.com</p>
                   <p><i className="material-icons">map</i>San Tan Valley, Arizona</p>
           </div>
           <div class="modal-footer">
           <a href="#!" class="modal-close waves-effect waves-green btn-flat">Close</a>
           </div>
           </div>
              <div className="col s12 m6">
                <div className="card teal lighten-1">
                   <div className="card-content white-text">
                   <span className="card-title center">Connect</span>
                   <a href="https://github.com/Dmolina-power">
                   <img src="https://img.icons8.com/fluent/96/000000/github.png"/>
                   </a>
                   <a className="LI-simple-link" href='https://www.linkedin.com/in/daniel-molina-power-b7705b1a6?trk=profile-badge'>
                          <img src="https://img.icons8.com/cute-clipart/96/000000/linkedin.png"/>
                   </a>
                   </div>
                  </div> 
              </div>
            </div>
          </div>
    
    </footer>        
  </div>
    
    )
}

export default Footer

