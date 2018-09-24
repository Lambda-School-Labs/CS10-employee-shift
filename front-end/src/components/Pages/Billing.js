// import React, { Component } from "react";
// // TODO: MAKE OWN STYLES
// import { BillingContainer, FormItem, Form } from "../../styles/signin.js";

// class Billing extends Component {
//   state = {
//     CC: "",
//     EXP: "",
//     CCV: "",
//   };

//   submitHandler = event => {
//     event.preventDefault();
//     // TODO: HANDLE STRIPE
//   };

//   inputChangeHandler = event => {
//     const { name, value } = event.target;
//     this.setState({ [name]: value });
//   };

//   render() {
//     return (
//       <BillingContainer>
//         {/* Pull out into Molecular components */}
//         <Form onSubmit={this.submitHandler}>
//           <FormItem>
//             <h3>Credit Card</h3>
//             <input
//               value={this.state.CC}
//               onChange={this.inputChangeHandler}
//               name="CC"
//               type="text"
//             />
//           </FormItem>
//           <FormItem>
//             <h3>Expires on</h3>
//             <input
//               value={this.state.EXP}
//               onChange={this.inputChangeHandler}
//               name="EXP"
//               type="text"
//             />
//           </FormItem>

//           <FormItem>
//             <h3>CCV</h3>
//             <input
//               value={this.state.CCV}
//               onChange={this.inputChangeHandler}
//               name="CCV"
//               type="text"
//             />
//           </FormItem>

//           <button className="billing_btn">Buy Now</button>
//         </Form>
//       </BillingContainer>
//     );
//   }
// }

// export default Billing;

import React, { Component } from "react";

import { StripeProvider } from "react-stripe-elements";

import MyStoreCheckout from "./test_pages/MyStoreCheckout";


//StripeProvider gives us access to the Stripe Object
//i.e Stripe.createToken, stripe.elements() etc
//App loads the stripe script asynchronously in CDM

class Billing extends Component {
  constructor(props) {
    super(props);
    this.state = { stripe: "" };
  }
  componentDidMount() {
    if (window.Stripe) {
      this.setState({
        stripe: window.Stripe(process.env.REACT_APP_publishable)
      });
    } else {
      document.querySelector("#stripe-js").addEventListener("load", () => {
        //Create Stripe instance once Stripe.js loads
        this.setState({
          stripe: window.Stripe(process.env.REACT_APP_publishable)
        });
      });
    }
  }

  render() {
    return (
      this.state.stripe && (
        <StripeProvider stripe={this.state.stripe}>
          <MyStoreCheckout />
        </StripeProvider>
      )
    );
  }
}

export default Billing;