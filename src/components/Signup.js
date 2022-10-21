//Styled Components
import {
    StyledFormArea,
    StyledFormButton,
    StyledTitle,
    colors,
    ButtonGroup,
    ExtraText,
    TextLink
} from './../styles/Styles';


// FORMIK
import {Formik, Form} from 'formik';
import {TextInput} from '../styles/FormLibs';
import * as Yup from 'yup'


//Loader
import { useHistory } from "react-router-dom";


const Signup = () => {


    const history = useHistory();
    return (
        <div>
            <StyledFormArea>
                <StyledTitle color={colors.dark2} size={30}>
                    Member Signup
                </StyledTitle>
                <Formik
                    initialValues={{
                        email: "",
                        password: "",
                        repeatPassword: "",
                        username: ""
                    }}
                    validationSchema={
                        Yup.object({
                            email: Yup.string().email("Invalid Email Address")
                                .required("Required"),
                            password: Yup.string()
                                .required("No password provided.")
                                .min(8, "Password is too short - should be 8 chars minimum.")
                                .matches(/(?=.*[0-9])/, "Password must contain a number."),
                            username: Yup.string().required("Required"),
                            repeatPassword: Yup.string().required("Required").oneOf([Yup.ref("password")], "Passwords Must Match")
                        })
                    }
                    onSubmit={(value, {setSubmitting}) => {
                        history.push("/login");
                        console.log(value);
                    }}
                >
                    {({isSubmitting}) => (
                        <Form>
                            <TextInput
                                name="username"
                                type="text"
                                label="Username"
                                placeholder="Enter your Username"

                            />
                            <TextInput
                                name="email"
                                type="text"
                                label="Email Address"
                                placeholder="Enter your Email"

                            />

                            <TextInput
                                name="password"
                                type="password"
                                label="Password"
                                placeholder="********"

                            />
                            <TextInput
                                name="repeatPassword"
                                type="password"
                                label="Confirm Password"
                                placeholder="********"

                            />

                            <ButtonGroup>
                                {!isSubmitting && (<StyledFormButton type="submit">
                                        Signup
                                    </StyledFormButton>
                                )}
                            </ButtonGroup>
                        </Form>
                    )}
                </Formik>
                <ExtraText>
                    Already A Member? <TextLink to="/login">Login</TextLink>
                </ExtraText>
                <ExtraText>
                    Return To <TextLink to="/">Home</TextLink>
                </ExtraText>
            </StyledFormArea>

        </div>
    );
};

export default Signup;