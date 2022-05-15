import express from "express";
import {deleteTask, insertTask,readTask,deleteMultipleTasks}  from "../model/Task.model.js"
const router = express.Router();

router.get("/",async  (req, res) => {
	const result = await readTask();


	
	res.json({
		message: "Hello get response",
		result
	});
	//console.log(JSON.stringify(result))
});

router.post("/", async (req, res) => {
	console.log(req.body);
	const result= await insertTask(req.body);
	//console.log(result);
	res.json({
		message: "Hello post response",
	});
});

router.patch("/", (req, res) => {
	console.log(req.body);
	res.json({
		message: "Hello put response",
	});
});

//router.delete("/:_id", async (req, res) => {
	router.delete("/", async (req, res) => {
		const {ids} =req.body;
		console.log("hi"+{ids});
	//console.log(req.params);
	const resul = await deleteMultipleTasks(ids);
	console.log(resul);
	res.json({
		message: "Hello delete response",
		resul
	});
});

export default router;
