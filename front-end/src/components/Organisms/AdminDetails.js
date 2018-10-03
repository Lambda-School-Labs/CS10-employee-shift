import React from "react";
import { connect } from "react-redux";

import { Segment, Card, Icon, Image } from "semantic-ui-react";
import { AdminDetailsContainer } from "../../styles/Admin.js";




const AdminDetails = props => {
  return (
    <AdminDetailsContainer>
      <Segment>
        <Card>
          <Image src={props.account.logo} />
          <Card.Content>
            <Card.Header>{props.account.company}</Card.Header>
            <Card.Meta>
              <span className="date">Joined in 2018</span>
            </Card.Meta>
            <Card.Description onClick={loging} contentEditable="true" id="description">Description</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name="user" />
              {this.account ? this.account.profile_set.length : 0}
              Employees
            </a>
          </Card.Content>
        </Card>
      </Segment>
    </AdminDetailsContainer>
  );
};

const mapStateToProps = state => {
  console.log(state.user.currentUser.account)
  return {
    account: state.user.currentUser.account,
  };
};

function loging() {

  let des = document.getElementById('description');
  des.addEventListener("keydown", function (event) {
    if (event.keyCode === 13) {
      console.log("Spitting out:", des.innerHTML)
      des.removeAttribute('contentEditable');
    }
  });

}

export default connect(
  mapStateToProps,
  null
  )(AdminDetails);
  