import { useState } from "react"

import { TaskEditor } from "./Components/TaskEditor/TaskEditor"
import { ShowTasks } from "./Components/ShowTasks/ShowTasks"
import { TaskProvider } from "./Components/Context/tasks"
import { FilterProvider } from "./Components/Context/filter"
import { Counters } from "./Components/Counters/Counters"

function App() {
	return (
		<TaskProvider>
			<FilterProvider>
				<h1>Gestor de tareas</h1>
				<Counters></Counters>
				<TaskEditor/>
				<ShowTasks/>
			</FilterProvider>
		</TaskProvider>
	)
}

export default App