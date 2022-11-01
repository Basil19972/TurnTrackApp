import { useToggle, upperFirst } from '@mantine/hooks';
import { useForm } from '@mantine/form';
import {
  TextInput,
  PasswordInput,
  Text,
  Paper,
  Group,
  PaperProps,
  Button,
  Divider,
  Checkbox,
  Anchor,
  Stack,
  Container,
} from '@mantine/core';
import axios from 'axios';
import LoginPage from '../pages/LoginPage';
//import { GoogleButton, TwitterButton } from '../SocialButtons/SocialButtons';

 function AuthenticationForm(props: PaperProps) {
  const [type, toggle] = useToggle(['login', 'register']);
  const form = useForm({
    initialValues: {
      email: '',
      firstName: '',
      lastName: '',
      age: '',
      height: '',
      password: '',
    },

    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : 'Invalid email'),
      password: (val) => (val.length <= 6 ? 'Password should include at least 6 characters' : null),
    },
  });

  return (
    <Container pt={200}>
    <Paper radius="md" p="xl" withBorder {...props}>
      <Text size="lg" weight={500}>
        Welcome to Turn Track, {type} with
      </Text>

      <Group grow mb="md" mt="md">
      </Group>


      <form onSubmit={form.onSubmit(() => {


        
        if (type === 'register'){
          axios.post('http://localhost:8080/users/register', form.values)
          .then(response => {return <LoginPage/>});        
        }else{
           const loginForm = {email:form.values.email, password:form.values.password }
          axios.post('http://localhost:8080/users/login', loginForm)
          .then(response => {

            if(response.headers.authorization){
              localStorage.setItem("AccessToken",response.headers.authorization?.replace("Bearer ",""))

              window.location.reload();
            }
        });          
        }


      })}>
        <Stack>
          {type === 'register' && (
            <TextInput
              required
              label="Vorname"
              placeholder="Dein Vorname"
              value={form.values.firstName}
              onChange={(event) => form.setFieldValue('firstName', event.currentTarget.value)}
            />
          )}

          {type === 'register' && (
            <TextInput
              required
              label="Nachname"
              placeholder="Dein Nachname"
              value={form.values.lastName}
              onChange={(event) => form.setFieldValue('lastName', event.currentTarget.value)}
            />
          )}

          {type === 'register' && (
            <TextInput
              required
              label="Alter"
              placeholder="Dein Alter"
              value={form.values.age}
              onChange={(event) => form.setFieldValue('age', event.currentTarget.value)}
            />
          )}

          {type === 'register' && (
            <TextInput
              required
              label="Grösse"
              placeholder="Deine Grösse in Meter"
              value={form.values.height}
              onChange={(event) => form.setFieldValue('height', event.currentTarget.value)}
            />
          )}

          <TextInput
            required
            label="Email"
            placeholder="hello@mantine.dev"
            value={form.values.email}
            onChange={(event) => form.setFieldValue('email', event.currentTarget.value)}
            error={form.errors.email && 'Invalid email'}
          />

          <PasswordInput
            required
            label="Password"
            placeholder="Your password"
            value={form.values.password}
            onChange={(event) => form.setFieldValue('password', event.currentTarget.value)}
            error={form.errors.password && 'Password should include at least 6 characters'}
          />

  
        </Stack>

        <Group position="apart" mt="xl">
          <Anchor
            component="button"
            type="button"
            color="dimmed"
            onClick={() => toggle()}
            size="xs"
          >
            {type === 'register'
              ? 'Already have an account? Login'
              : "Don't have an account? Register"}
          </Anchor>
          <Button type="submit">{upperFirst(type)}</Button>
        </Group>
      </form>
    </Paper>
    </Container>
  );
}
export default AuthenticationForm;