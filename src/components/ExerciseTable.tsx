import { useEffect, useState } from "react";
import {
  createStyles,
  Table,
  Checkbox,
  ScrollArea,
  Group,
  Avatar,
  Text,
  Button,
  Container,
  TextInput,
  Select,
} from "@mantine/core";
import { DatePicker } from "@mantine/dates";

import axios from "axios";

const useStyles = createStyles((theme) => ({
  rowSelected: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.fn.rgba(theme.colors[theme.primaryColor][7], 0.2)
        : theme.colors[theme.primaryColor][0],
  },
}));

interface Exercisesprops {
  exerciseprops: { id: string; name: string; amountOfSets: number }[];
}

function TableSelection() {
  const [name, setname] = useState("");
  const [dayname, setdayname] = useState<string | null>(null);

  const handleChange = (event: any) => {
    setname(event.target.value);
  };

  const [exercisesState, setexercises] = useState([
    { id: "", name: "", amountOfSets: 0 },
  ]);

  async function getExercises() {
    return await axios.get(
      "https://turn-track-production.herokuapp.com/exercise/byuser",
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("AccessToken")}`,
        },
      }
    );
  }

  useEffect(() => {
    getExercises().then((res) => {
      setexercises(res.data);
    });
  }, []);

  const data: any[] = [];
  exercisesState.forEach((e) => data.push(e));

  const { classes, cx } = useStyles();
  const [selection, setSelection] = useState<string[]>([]);

  function deleteExercise() {
    selection.forEach((s) => {
      SenddeleteExercise(s).then((res) => {
        console.log(res.status);
        window.location.reload();
      });
    });
  }

  async function SenddeleteExercise(id: string) {
    return await axios.delete(
      `https://turn-track-production.herokuapp.com/exercise/ ${id}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("AccessToken")}`,
        },
      }
    );
  }

  function createTrainingDay() {
    let exerciseobject: any = {};
    let exerciseobjects: any[] = [];

    selection.forEach((s) => {
      exerciseobject = { id: s };
      exerciseobjects.push(exerciseobject);
    });
    const trainingDay = {
      dayPlanname: name,
      dayName: dayname,
      exercises: exerciseobjects,
    };

    console.log(selection);
    console.log(trainingDay);
    axios
      .post(
        "https://turn-track-production.herokuapp.com/weekday",
        trainingDay,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("AccessToken")}`,
          },
        }
      )
      .then((response) => {
        window.location.reload();
      });
  }

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
    console.log(selection);

    return (
      <tr key={item.name} className={cx({ [classes.rowSelected]: selected })}>
        <td>
          <Checkbox
            checked={selection.includes(item.id)}
            onChange={() => toggleRow(item.id)}
            transitionDuration={0}
          />
        </td>
        <td>
          <Group spacing="sm">
            <Avatar size={26} src={item.name} radius={26} />
            <Text size="sm" weight={500}>
              {item.name}
            </Text>
          </Group>
        </td>
        <td>{item.amountOfSets}</td>
      </tr>
    );
  });

  return (
    <>
      <Group>
        <Text size={"xl"} mb={10}>
          List of your Exercises
        </Text>

        <Button
          mt={20}
          onClick={deleteExercise}
          variant="gradient"
          gradient={{ deg: 133, from: "red", to: "cyan" }}
        >
          Delete Exercise
        </Button>
      </Group>

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
              <th>Name</th>
              <th>Amount of Sets</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
      </ScrollArea>

      <Container mt={50}>
        <Text size={"xl"} mb={10}>
          Select some Exercises and Creat your Trainingday
        </Text>

        <Select
          label="Select Trainingday"
          value={dayname}
          onChange={setdayname}
          data={[
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ]}
        />

        <TextInput
          label="Training Day Name"
          type="text"
          id="message"
          name="message"
          onChange={handleChange}
          value={name}
        />

        <Button
          mt={10}
          onClick={createTrainingDay}
          variant="gradient"
          gradient={{ deg: 133, from: "red", to: "cyan" }}
        >
          Create new Training Day
        </Button>
      </Container>
    </>
  );
}
export default TableSelection;
