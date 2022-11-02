import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { createStyles, Paper, Text, Title, Button, useMantineTheme } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  card: {
    height: 440,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    color: theme.white,
    lineHeight: 1.2,
    fontSize: 32,
    marginTop: theme.spacing.xs,
  },

  category: {
    color: theme.white,
    opacity: 0.7,
    fontWeight: 700,
    textTransform: 'uppercase',
  },
}));

interface CardProps {
  image: string;
  title: string;
  category: string;
}

function Card({ image, title, category }: CardProps) {
  const { classes } = useStyles();

  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      sx={{ backgroundImage: `url(${image})` }}
      className={classes.card}
    >
      <div>
        <Text className={classes.category} size="xs">
          {category}
        </Text>
        <Title order={3} className={classes.title}>
          {title}
        </Title>
      </div>
      <Button 
      variant="gradient"
      gradient={{ deg: 133, from: 'red', to: 'cyan' }}>
        Read article
      </Button>
    </Paper>
  );
}

const data = [
  {
    image:
    '/pics/carsousellpic1.jpg',
        title: 'Best forests to visit in North America',
    category: 'GYM',
  },
  {
    image:
      '/pics/carsousellpic2.jpg',
    title: 'Hawaii beaches review: better than you think',
    category: 'GYM',
  },
  {
    image:
    '/pics/carsousellpic3.jpg',
    title: 'Mountains at night: 12 best locations to enjoy the view',
    category: 'GYM',
  },
  {
    image:
    '/pics/carsousellpic4.jpg',
    title: 'Aurora in Norway: when to visit for best experience',
    category: 'GYM',
  },
  {
    image:
    '/pics/carsousellpic5.jpg',
    title: 'Best places to visit this winter',
    category: 'GYM',
  },
  {
    image:
    '/pics/carsousellpic6.jpg',
    title: 'Active volcanos reviews: travel at your own risk',
    category: 'GYM',
  },
];

function CardsCarousel() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`);
  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <Card {...item} />
    </Carousel.Slide>
  ));

  return (
    <Carousel
      slideSize="50%"
      breakpoints={[{ maxWidth: 'sm', slideSize: '100%', slideGap: 2 }]}
      slideGap="xl"
      align="start"
      slidesToScroll={mobile ? 1 : 2}
    >
      {slides}
    </Carousel>
  );
}
export default CardsCarousel;