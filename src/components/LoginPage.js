import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged } from '../actions';
import { Input, Section, Wrapper } from './common';

class LoginPage extends Component {
    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }

    render() {
        return (
            <Wrapper>
                <Section>
                    <Input 
                        placeholder="email"
                        value={this.props.email}
                        onChangeText={this.onEmailChange.bind(this)}
                    />
                </Section>
                <Section>
                    <Input
                        secureTextEntry 
                        placeholder="password"
                        value={this.props.password}
                        onChangeText={this.onPasswordChange.bind(this)}
                    />
                </Section>
                <Section>
                    <Text>Already a member?</Text>
                    <Text>Sign In</Text>
                </Section>
            </Wrapper>
        );
    }
}

const mapStateToProps = ({ auth }) => {
    return {
        email: auth.email,
        password: auth.password
    };
};

export default connect(mapStateToProps, { emailChanged, passwordChanged })(LoginPage);
