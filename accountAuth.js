import React, { Component } from 'react';
import { Container, Form, FormGroup, Input, Label } from 'reactstrap';
import FooterLite from './FooterLite';
import HeaderLite from './HeaderLite';



class ConfirmAccount extends Component {
  render() {
    return (
      <section>
        <HeaderLite />

        <Container className="ml-md-4 col-md-5 mt-5 mpa__color-dark authentication__container">
          <div className="shadow-sm mt-4 p-md-5 p-4 authentication__box">
            <h3 className="text-center">Confirm your account</h3>
            <p className="text-center">Type in the token sent to your mobile or email</p>

            <Form className="pb-4">
              <FormGroup className="mt-5">
                <Label for="resetPassword">Enter Token</Label>
                <Input className="rounded-0" id="resetPassword" type="email" placeholder="provide your email" />
                <Input type="submit" className="btn btn-block rounded-0 btn-danger mt-4 FormButton" />
              </FormGroup>
            </Form>
          </div>
        </Container>


        {/* Import Footer Component in Home */}
        <FooterLite />
      </section>
    );
  }
}

export default ConfirmAccount;