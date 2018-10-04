import React from "react";
import { connect } from "react-redux";

import { Segment, Card, Icon, Image } from "semantic-ui-react";
import { AdminDetailsContainer } from "../../styles/Admin.js";

const AdminDetails = props => {
  return (
    <AdminDetailsContainer>
      <Card>
        <Image src={props.account.logo} size="small" />
        <Card.Content>
          <Card.Header>{props.account.company}</Card.Header>
          <Card.Meta>
            <span className="date">Joined in 2018</span>
          </Card.Meta>
          <Card.Description>Description</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name="user" />
            {props.account ? props.account.profile_set.length : 0}
            Employees
          </a>
        </Card.Content>
      </Card>
    </AdminDetailsContainer>
  );
};

const mapStateToProps = state => {
  return {
    account: state.user.currentUser.account,
  };
};

export default connect(
  mapStateToProps,
  null
)(AdminDetails);
