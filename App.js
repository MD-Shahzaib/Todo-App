// IMPORT.
import { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';

// MAIN-CODE.
export default function App() {
  // States.
  const [value, setValue] = useState('');
  const [lists, setLists] = useState([]);
  const [changeBtn, setChangeBtn] = useState(true);
  const [indexing, setIndexing] = useState('');

  // function for addTodo.
  const addTodo = () => {
    if (value !== '') {
      const copyList = [...lists];
      copyList.push(value);
      setLists(copyList);
      setValue('');
      console.log(value)
    } else {
      alert('Please Enter any todo Item!');
    }
  };

  // function for deleteTodo.
  const deleteTodo = (index) => {
    const copyList = [...lists];
    copyList.splice(index, 1);
    setLists(copyList);
    console.log(index, 'deleteTodo call');
  };

  // function for editTodo.
  const editTodo = (index) => {
    const copyList = [...lists];
    const edit = copyList[index];
    setValue(edit);
    setIndexing(index)
    setChangeBtn(false)
    console.log('index', index, 'edit', edit, 'editTodo-call');
  };

  // function for updateTodo.
  const updateTodo = () => {
    const copyList = [...lists];
    copyList[indexing] = value;
    setLists(copyList);
    setChangeBtn(true);
    setValue('');
    console.log(value, indexing, 'updateTodo call');
  };

  return (
    // Container.
    <View style={styles.container}>
      {/* Title */}
      <Text style={styles.logo}>Todo App</Text>
      {/* Input-Container */}
      <View style={styles.inputBox}>
        {/* Input */}
        <TextInput style={styles.input} value={value} placeholder={"Add Todo's.."} onChange={(e) => {
          setValue(e.target.value)
        }} />
        {/* Button */}
        {changeBtn
          ?
          <Button
            title='ADD'
            onPress={addTodo}
          />
          :
          <Button
            title='UPDATE'
            onPress={updateTodo}
          />
        }
      </View>
      {/* Todo-List-container */}
      <View style={styles.todoList}>
        {lists.map((item, index) => {
          return (
            // Todo-box.
            <View key={index} style={styles.todoBox}>
              {/* Todo-Item */}
              <Text style={styles.todo}>{item}</Text>
              {/* Delete-Btn */}
              <Button title='DELETE' onPress={() => { deleteTodo(index) }} />
              {/* Edit-Btn */}
              <Button title='EDIT' onPress={() => { editTodo(index) }} />
            </View>
          )
        })}
      </View>
    </View >
  );
};

// StyleSheet---------------------.
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#5da3c5',
    color: 'aliceblue',
    flex: 1,
    alignItems: 'center',
  },
  logo: {
    backgroundColor: 'black',
    color: 'aliceblue',
    fontSize: 25,
    fontWeight: '600',
    padding: 3,
    borderRadius: 5,
  },
  inputBox: {
    backgroundColor: 'aliceblue',
    flex: 0.1,
    width: 290,
    margin: 10,
    padding: 2,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row'
  },
  input: {
    backgroundColor: 'aliceblue',
    color: 'black',
    fontSize: 20,
    padding: 3,
    borderStyle: 'solid',
    borderColor: 'gray',
    borderRadius: 5,
    borderWidth: 2
  },
  todoList: {
    padding: 5,
  },
  todoBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  todo: {
    backgroundColor: 'aliceblue',
    borderStyle: 'solid',
    borderColor: 'gray',
    borderWidth: 2,
    borderRadius: 5,
    padding: 3,
    margin: 2,
    textAlign: 'center',
  }
});

// __________________________________________________________________________.









































































// ------------------------------CHATGPT CODE------------------------------.
// _________________________________________________________________________.
//  1- todo start.
/*
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);
  const [updateTodo, setUpdateTodo] = useState(null);

  const handleChange = (val) => {
    setTodo(val);
  };
  const addTodo = (todo) => {
    if (updateTodo) {
      const newTodos = todos.map((t) => {
        if (t.id === updateTodo.id) {
          return {
            id: t.id,
            name: todo
          }
        }
        return t;
      })
      setTodos(newTodos);
      setUpdateTodo(null);
      setTodo('');
    } else {
      setTodos([...todos, { name: todo, id: Math.random() }]);
      setTodo('');
    }
  };

  const deleteTodo = (id) => {
    const newTodos = todos.filter((t) => t.id !== id);
    setTodos(newTodos);
  };

  const updateTodos = (id, name) => {
    setUpdateTodo({ id, name });
    setTodo(name);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="add a todo"
        onChangeText={handleChange}
        value={todo}
      />
      <Button onPress={() => addTodo(todo)} title="add todo" color="coral" />
      <View style={styles.list}>
        {todos.map((t) => (
          <View key={t.id} style={styles.listItem}>
            <Text>{t.name}</Text>
            <Button
              onPress={() => deleteTodo(t.id)}
              title="delete"
              color="red"
            />
            <Button
              onPress={() => updateTodos(t.id, t.name)}
              title="update"
              color="green"
            />
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  list: {
    marginTop: 20,
  },
  listItem: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
*/
//  1- todo End.
// _________________________________________________________________________.
// 2- todo start.
/*
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';

export default function App() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);

  const handleChange = (val) => {
    setTodo(val);
  }
  const addTodo = () => {
    if (todo.length > 0) {
      setTodos([...todos, { text: todo, key: Math.random().toString() }]);
      setTodo('');
    }
  }
  const deleteTodo = (id) => {
    setTodos(prevTodos => {
      return prevTodos.filter(todoItem => todoItem.key != id);
    });
  }
  const updateTodo = (text, id) => {
    setTodos(prevTodos => {
      return prevTodos.map(todoItem => {
        if (todoItem.key === id) {
          todoItem.text = text;
        }
        return todoItem;
      });
    });
  }
  return (
    <View style={styles.container}>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Add Todo..."
          onChangeText={handleChange}
          value={todo}
        />
        <Button title="ADD" color="#f194ff" onPress={addTodo} />
      </View>
      <FlatList
        data={todos}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <TextInput
              style={styles.listItemText}
              value={item.text}
              onChangeText={(text) => updateTodo(text, item.key)}
            />
            <Button title="Delete" color="red" onPress={() => deleteTodo(item.key)} />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingHorizontal: 10,
  },
  inputView: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  inputText: {
    width: '80%',
    backgroundColor: '#eaeaea',
    padding: 10,
    borderRadius: 10
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    marginTop: 10,
    backgroundColor: '#f8f8f8',
    borderRadius: 10
  },
  listItemText: {
    width: '80%',
    backgroundColor: '#eaeaea',
    padding: 10,
    borderRadius: 10
  }
});
*/
// 2- todo End.
// _________________________________________________________________________.
// whatsapp start.
/*
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
const WhatsApp = () => {
  const [message, setMessage] = useState('');
  const handleMessageChange = (text) => {
    setMessage(text);
  };
  const handleSendMessage = () => {
    alert(`Message sent: ${message}`);
    setMessage('');
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={message}
        onChangeText={handleMessageChange}
      />
      <TouchableOpacity style={styles.button} onPress={handleSendMessage}>
        <Text style={styles.buttonText}>Send</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '90%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#0084ff',
    width: '90%',
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
export default WhatsApp;
*/
// whatsapp End.
// _________________________________________________________________________.
// ------------------------------CHATGPT CODE------------------------------.
