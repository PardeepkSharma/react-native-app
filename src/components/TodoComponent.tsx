import { View, Text, TextInput, Button, FlatList } from "react-native";
import React, { useReducer, useState } from "react";

type todoType = {
  id: string;
  task: string;
};
type AddTodo = {
  type: "ADD";
  payload: { id: string; task: string };
};
type EditTodo = {
  type: "EDIT";
  payload: { id: string; task: string };
};
type DeleteTodo = {
  type: "DELETE";
  id: string;
};
type Action = AddTodo | EditTodo | DeleteTodo;
const initialState: todoType[] = [];
const reducer = (state: todoType[], action: Action): todoType[] => {
  switch (action.type) {
    case "ADD":
      return [...state, { id: action.payload.id, task: action.payload.task }];
    case "EDIT":
      return state.map((item: todoType) =>
        item.id === action.payload.id
          ? { ...item, task: action.payload.task }
          : item
      );
    case "DELETE":
      return state.filter((item: todoType) => item.id !== action.id);
    default:
      return state;
  }
};
const TodoComponent = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [task, setTask] = useState<string>("");
  const [btnAction, setBtnAction] = useState<string>("Add");
  const [taskId, setTaskId] = useState<string>("");

  const addAndUpdate = () => {
    if (btnAction == "Add") {
      dispatch({
        type: "ADD",
        payload: { id: new Date().toString(), task: task },
      });
    } else {
      dispatch({ type: "EDIT", payload: { id: taskId, task: task } });
      setBtnAction("Add");
    }
    setTask("");
  };

  return (
    <View>
      <View>
        <Text>My Todo</Text>
        <TextInput
          value={task}
          placeholder="Enter TODO"
          onChangeText={setTask}
        />
        <Button
          title={btnAction}
          onPress={addAndUpdate}
          disabled={task ? false : true}
        />
      </View>
      <FlatList
        data={state}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                margin: 5,
              }}
            >
              <Text>{item.task}</Text>
              <View style={{ display: "flex", flexDirection: "row", gap: 5 }}>
                <Button
                  title="Edit"
                  color="teal"
                  onPress={() => {
                    setTask(item.task)
                    setTaskId(item.id);
                    setBtnAction("Update");
                }}
                />
                <Button
                  title="Delete"
                  color="red"
                  onPress={() => dispatch({ type: "DELETE", id: item.id })}
                ></Button>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default TodoComponent;
