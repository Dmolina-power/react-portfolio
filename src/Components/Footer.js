import React from 'react'

function Footer() {
    return (
        <div>
        <footer class="page-footer">
        <div class="container">
            <div class="row">
                <div class="col s12 m6">
                  <div class="card teal lighten-1">
                    <div class="card-content white-text">
                      <span class="card-title center">Contact Info</span>
                     <p><i class="material-icons">phone</i>(480)800-7959</p>
                     <p><i class="material-icons">email</i>bigdpower@icloud.com</p>
                     <p><i class="material-icons">map</i>San Tan Valley, Arizona</p>
                    </div>
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
