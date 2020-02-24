import React, { useContext } from 'react';
import { StoreContext, StoreProvider } from './store';
import TodoListStore from './store/TodoList';
import TodoNew from './components/TodoNew';
import TodoList from './components/TodoList';

const todoList = new TodoListStore(['Should Starting Writing in React', 'Should Learn MobX', 'Should Watch Once Piece :)']);

function App() {
	return (
		<StoreProvider value={todoList}>
			<TodoNew />
			<TodoList />
		</StoreProvider>
	);
}
export const useStore = (): TodoListStore => useContext(StoreContext);

export default App;
