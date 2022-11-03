import {
  JSXElementConstructor,
  ReactElement,
  ReactFragment,
  ReactPortal,
  useEffect,
  useState,
} from "react";
import {
  createStyles,
  Table,
  Checkbox,
  ScrollArea,
  Group,
  Avatar,
  Text,
  Select,
  Accordion,
  Container,
  List,
} from "@mantine/core";
import axios from "axios";

const useStyles = createStyles((theme) => ({
  rowSelected: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.fn.rgba(theme.colors[theme.primaryColor][7], 0.2)
        : theme.colors[theme.primaryColor][0],
  },
}));

function TableSelection() {
  const [trainingDay, setTrainingDay] = useState([
    {
      id: "",
      dayPlanname: "",
      dayName: "",
      exercises: [{ id: "", name: "", amountOfSets: 0 }],
    },
  ]);

  async function getTrainingDays() {
    return await axios.get(
      "https://turn-track-production.herokuapp.com/weekday/user",
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("AccessToken")}`,
        },
      }
    );
  }

  useEffect(() => {
    getTrainingDays().then((res) => {
      setTrainingDay(res.data);
      console.log(res.data);
    });
  }, []);

  const data: any[] = [];
  trainingDay.forEach((e) => data.push(e));

  const { classes, cx } = useStyles();
  const [selection, setSelection] = useState<string[]>([]);
  const toggleRow = (id: string) =>
    setSelection((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  const toggleAll = () =>
    setSelection((current) =>
      current.length === data.length ? [] : data.map((item) => item.id)
    );

  const rows = data.map((item) => {
    const selected = selection.includes(item.id);
    return (
      <tr key={item.id} className={cx({ [classes.rowSelected]: selected })}>
        <td>
          <Checkbox
            checked={selection.includes(item.id)}
            onChange={() => toggleRow(item.id)}
            transitionDuration={0}
          />
        </td>
        <td>
          <Group spacing="sm">
            <Avatar size={26} src={item.avatar} radius={26} />
            <Text size="sm" weight={500}>
              {item.dayPlanname}
            </Text>
          </Group>
        </td>
        <td>
          <Text size="sm" weight={500}>
            {item.dayName}
          </Text>
        </td>
        <td>
          <Container size="sm">
            <Accordion variant="separated">
              <Accordion.Item value="Exercises">
                <Accordion.Control>Exercises</Accordion.Control>
                <Accordion.Panel>
                  {item.exercises.map(
                    (e: {
                      name:
                        | string
                        | number
                        | boolean
                        | ReactElement<any, string | JSXElementConstructor<any>>
                        | ReactFragment
                        | ReactPortal
                        | null
                        | undefined;
                    }) => {
                      return (
                        <List>
                          <List.Item>{e.name}</List.Item>
                        </List>
                      );
                    }
                  )}
                </Accordion.Panel>
              </Accordion.Item>
            </Accordion>
          </Container>
        </td>
      </tr>
    );
  });

  return (
    <>
      <Text size={"xl"} mb={10}>
        List of your Training Days
      </Text>
      <ScrollArea>
        <Table sx={{ minWidth: 800 }} verticalSpacing="sm">
          <thead>
            <tr>
              <th style={{ width: 40 }}>
                <Checkbox
                  onChange={toggleAll}
                  checked={selection.length === data.length}
                  indeterminate={
                    selection.length > 0 && selection.length !== data.length
                  }
                  transitionDuration={0}
                />
              </th>
              <th>Day Name</th>
              <th>Day</th>
              <th>Exercises</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
      </ScrollArea>
    </>
  );
}
export default TableSelection;
