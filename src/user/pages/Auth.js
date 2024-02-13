import React from 'react'
import './Auth.css'
import Card from '../../shared/components/UIElements/Card'
import Input from '../../shared/components/FormElements/Input'
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH } from '../../shared/utils/validators'
import { useForm } from '../../shared/hooks/form-hook'
import Button from '../../shared/components/FormElements/Button'

const Auth = () => {

    const [formState, inputHandler] = useForm({
        email: {
            value: '',
            isValid: false
        },
        password: {
            value: '',
            isValid: false
        }
    })

    const authSubmitHandler = event => {
        event.preventDefault()
        console.log(formState.inputs)
    }

    return (
        <Card className="authentication">
            <h2>Loggin Required</h2>
            <hr />
            <form onSubmit={authSubmitHandler}>

                <Input
                    LABEL="E-mail"
                    id="email"
                    element="input"
                    type="email"
                    validators={[VALIDATOR_EMAIL()]}
                    errorText="please enter a valid email"
                    onInput={inputHandler}
                />

                <Input
                    LABEL="Password"
                    id="password"
                    element="input"
                    type="password"
                    validators={[VALIDATOR_MINLENGTH(5)]}
                    errorText="please enter a valid password"
                    onInput={inputHandler}
                />

                <Button type="submit" disabled={!formState.isValid} >LogIn</Button>
            </form>
        </Card>

    )
}

export default Auth
