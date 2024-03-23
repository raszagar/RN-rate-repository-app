import { Formik, useField } from "formik"
import { Button, StyleSheet, TextInput, View } from "react-native"
import StyledTextInput from "../components/StyledTextInput"
import StyledText from "../components/StyledText"
import { loginValidationSchema } from "../validationSchemas/login.js"

const initialValues = {
    email: '',
    password: ''
}

const styles = StyleSheet.create({
    formulario: {
        margin: 12
    },
    error: {
        color: 'red',
        fontSize: 12,
        marginBottom: 20,
        marginTop: -10
    
    }
})

const FormikInputValue = ({ name, ...props }) => {
    const [field, meta, helpers] = useField(name);

    return (
        <>
            <StyledTextInput
                error={meta.error}
                value={field.value}
                onChangeText={value => helpers.setValue(value)}
                {...props}
            />
            {meta.error && <StyledText style={styles.error}>{meta.error}</StyledText>}
        </>
    )
}


export default function LogInPage() {
    return (
        <Formik validationSchema={loginValidationSchema} initialValues={initialValues} onSubmit={values => console.log(values)}>
            {
                ({ handleChange, handleSubmit, values }) => {
                    return (
                        <View style={styles.formulario}>
                            <FormikInputValue placeholder="E-mail" name='email' />
                            <FormikInputValue placeholder="Password" name='password' secureTextEntry />

                            <Button title="Log in" onPress={handleSubmit} />
                        </View>
                    )
                }
            }
        </Formik>
    )
}