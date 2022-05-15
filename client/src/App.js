import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./App.css";
import { AddForm } from "./components/form/AddForm";
import { BadList } from "./components/task-list/BadList";
import { TaskList } from "./components/task-list/TaskList";
import { Title } from "./components/title/Title";

const weeklyHrs = 24 * 7;

const App = () => {
	const [taskList, setTaskList] = useState([]);
	const [badList, setBadList] = useState([]);

	const deleteTask = () => {
		return window.confirm("Are you sure you want to delete this task?");
	};

	// remove item form the task list
	const removeFromTaskList = i => {
		if (deleteTask()) {
			const filteredArg = taskList.filter((item, index) => index !== i);
			setTaskList(filteredArg);
		}
	};
	// remove item form the bad list
	const removeFromBadList = i => {
		if (deleteTask()) {
			const filteredArg = badList.filter((item, index) => index !== i);
			setBadList(filteredArg);
		}
	};

	const shiftToBadList = i => {
		const item = taskList[i];

		setBadList([...badList, item]);

		// remove the item from the task list
		removeFromTaskList(i);
	};

	// from bad list to task list
	const shiftToTaskList = i => {
		const item = badList[i];
		setTaskList([...taskList, item]);
		removeFromBadList(i);
	};

	const taskListTotalHr = taskList.reduce((acc, item) => acc + item.hr, 0);
	const badListTotalHr = badList.reduce((acc, item) => acc + item.hr, 0);
	const ttlHRs = taskListTotalHr + badListTotalHr;

	const addToTaskList = newInfo => {
		if (ttlHRs + newInfo.hr <= weeklyHrs) {
			setTaskList([...taskList, newInfo]);
		} else {
			alert("You have exceeded the weekly limit of " + weeklyHrs + "hrs");
		}
	};

	return (
		<div className="wrapper">
			<Container>
				{/* title comp */}
				<Title />

				{/* form comp */}
				<AddForm addToTaskList={addToTaskList} />

				<hr />

				{/* Task list comp */}
				<Row>
					<Col md="6">
						<TaskList
							taskList={taskList}
							removeFromTaskList={removeFromTaskList}
							shiftToBadList={shiftToBadList}
						/>
					</Col>
					<Col md="6">
						<BadList
							badList={badList}
							removeFromBadList={removeFromBadList}
							shiftToTaskList={shiftToTaskList}
							badListTotalHr={badListTotalHr}
						/>
					</Col>
				</Row>

				{/* total hours allocation */}

				<Row>
					<Col>
						<h3 className="mt-5">
							The total allocated hours is: {ttlHRs}
							hrs
						</h3>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default App;
