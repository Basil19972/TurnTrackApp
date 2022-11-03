import { useState } from 'react';
import { createStyles, Header, Container, Group, Burger, Button, Image, Drawer, Modal, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Link } from 'react-router-dom';
import { NavLink } from '@mantine/core';
import { ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/modal';
import { IconChevronRight, IconGauge } from '@tabler/icons';

const useStyles = createStyles((theme) => ({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
  },

  links: {
    [theme.fn.smallerThan('xs')]: {
      display: 'none',
    },
  },

  burger: {
    [theme.fn.largerThan('xs')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: '8px 12px',
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },
  },

  linkActive: {
    '&, &:hover': {
      backgroundColor: theme.fn.variant({ variant: 'light', color: "cyan" }).background,
      color: theme.fn.variant({ variant: 'light', color: "red" }).color,
    },
  },
}));

interface HeaderSimpleProps {
  links: { link: string; label: string }[];
}

 function HeaderSimple({ links }: HeaderSimpleProps) {
  const [opened, { toggle }] = useDisclosure(false);
  
  const [active, setActive] = useState(links[0].link);
  const { classes, cx } = useStyles();

  const items = links.map((link) => (
    
    <Link
      key={link.label}
      to={link.link}
      className={cx(classes.link, { [classes.linkActive]: active === link.link })}
      onClick={(event) => {
        setActive(link.link);
      }}
    >
      {link.label}
    </Link>

  ));

  return (
    <Header height={60} >
      <Container className={classes.header}>

      <Group>
        <Image
        height={80}
        width={80}
        src={'/pics/hantel-removebg-preview.png'}
        />
                <h2>Turn Track</h2>

        </Group>
       
      
      
        <Group spacing={5} className={classes.links}>
          {items}
        </Group>

        <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" />
        

        <Modal onClose={toggle} opened={opened}>
        <NavLink label="Home Page" component={Link} to="/"  />
        <NavLink label="Training Progres" component={Link} to="/userStatPage"  />
        <NavLink label="Account" component={Link} to="/account"  />
        <NavLink label="Contact" component={Link} to="/contact"  />
        <NavLink label="Exercises" component={Link} to="/exercises"  />   
        </Modal>
          
  
        
        <Button onClick={()=>{
          localStorage.removeItem("AccessToken");
          window.location.reload();
        }}
        variant="gradient"
            gradient={{ deg: 133, from: 'red', to: 'cyan' }}
        >Logout</Button>


      </Container>
    </Header>
  );
}
export default HeaderSimple;