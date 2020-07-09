import React from "react";

function Form() {
  return (
    <div>
      <div class="row">
        <h4>Contact Me</h4>
        <div class="col s12 m6">
          <div class="card-panel">
            <div class="row">
              <form class="col s12">
                <div class="row">
                  <div class="input-field col s6">
                    <input
                      placeholder="Placeholder"
                      id="first_name"
                      type="text"
                      class="validate"
                    />
                    <label for="first_name">First Name</label>
                  </div>
                  <div class="input-field col s6">
                    <input id="last_name" type="text" class="validate" />
                    <label for="last_name">Last Name</label>
                  </div>
                </div>
                <div class="row">
                  <div class="input-field col s12">
                    <input id="email" type="email" class="validate" />
                    <label for="email">Email</label>
                  </div>
                </div>
                <div class="row">
                  <div class="input-field col s12 md6">
                    <i class="material-icons prefix">mode_edit</i>
                    <textarea
                      id="icon_prefix2"
                      class="materialize-textarea"
                    ></textarea>
                    <label for="icon_prefix2">Message</label>
                  </div>
                </div>
                <div class="row">
                  <button
                    class="btn waves-effect waves-light"
                    type="submit"
                    name="action"
                  >
                    Submit
                    <i class="material-icons right">send</i>
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
