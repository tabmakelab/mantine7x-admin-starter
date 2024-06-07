import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button,
  Box,
  Stack,
} from '@mantine/core';
import { NavLink, useNavigate } from 'react-router-dom';
import classes from './SignIn.module.css';
import { ColorSchemeToggle } from '@/components/ColorSchemeToggle';

export function SignInPage() {
  const nav = useNavigate();
  return (
    <Container size={420} my={40}>
      <Box className={classes['color-scheme-toggle-wrapper']}>
        <ColorSchemeToggle />
      </Box>
      <Stack mt="40%">
        <Title ta="center" className={classes.title}>
          Welcome back!
        </Title>
        <Text c="dimmed" size="sm" ta="center" mt={5}>
          Do not have an account yet?{' '}
          <NavLink to="/sign-up">
            <Anchor size="sm" component="button">
              Create account
            </Anchor>
          </NavLink>
        </Text>

        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          <TextInput label="Email" placeholder="you@mantine.dev" required />
          <PasswordInput label="Password" placeholder="Your password" required mt="md" />
          <Group justify="space-between" mt="lg">
            <Checkbox label="Remember me" />
            <Anchor component="button" size="sm">
              Forgot password?
            </Anchor>
          </Group>
          <Button
            fullWidth
            mt="xl"
            onClick={() => {
              nav('/');
            }}
          >
            Sign in
          </Button>
        </Paper>
      </Stack>
    </Container>
  );
}
