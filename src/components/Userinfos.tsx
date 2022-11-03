import {
  createStyles,
  Avatar,
  Text,
  Group,
  Center,
  Container,
} from "@mantine/core";
import { IconPhoneCall, IconAt } from "@tabler/icons";

const useStyles = createStyles((theme) => ({
  icon: {
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[3]
        : theme.colors.gray[5],
  },

  name: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },
}));

interface UserInfoIconsProps {
  avatar: string;
  firstname: string;
  lastname: string;
  weight: number;
  height: number;
  email: string;
  age: number;
}

function UserInfoIcons({
  avatar,
  firstname,
  lastname,
  weight,
  height,
  email,
  age,
}: UserInfoIconsProps) {
  const { classes } = useStyles();
  return (
    <div>
      <Center>
        <Container pt={100}>
          <Group noWrap>
            <Avatar src={avatar} size={94} radius="md" />
            <div>
              <Text
                size="xl"
                sx={{ textTransform: "uppercase" }}
                weight={700}
                color="dimmed"
              >
                {firstname} {lastname}
              </Text>

              <Text size="md" weight={500} className={classes.name}>
                Email: {email}
              </Text>

              <Text size="md" weight={500} className={classes.name}>
                Weight: {weight} kg
              </Text>

              <Text size="md" weight={500} className={classes.name}>
                Size: {height} m
              </Text>

              <Text size="md" weight={500} className={classes.name}>
                Age: {age}
              </Text>
            </div>
          </Group>
        </Container>
      </Center>
    </div>
  );
}
export default UserInfoIcons;
