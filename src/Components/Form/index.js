import React from "react";

function Form() {
  return (
    <div>
      <div className="row">
        <h4>Contact Me</h4>
        <div className="col s12 m6">
          <div className="card-panel">
            <div className="row">
              <form className="col s12" method="post" action="contact.php">
                <div className="row">
                  <div className="input-field col s6">
                    <input
                      placeholder="Placeholder"
                      id="first_name"
                      type="text"
                      className="validate"
                    />
                    <label htmlFor="first_name">First Name</label>
                  </div>
                  <div className="input-field col s6">
                    <input id="last_name" type="text" className="validate" />
                    <label htmlFor="last_name">Last Name</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <input id="email" type="email" className="validate" />
                    <label htmlFor="email">Email</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12 md6">
                    <i className="material-icons prefix">mode_edit</i>
                    <textarea
                      id="icon_prefix2"
                      className="materialize-textarea"
                    ></textarea>
                    <label htmlFor="icon_prefix2">Message</label>
                  </div>
                </div>
                <div className="row">
                  <button
                    className="btn waves-effect waves-light"
                    type="submit"
                    name="action"
                  >
                    Submit
                    <i className="material-icons right">send</i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
