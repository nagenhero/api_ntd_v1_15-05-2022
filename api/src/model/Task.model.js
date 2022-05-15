import TaskSchema from "./Task.schema.js"
//######queries
//####insert task
export const insertTask =(taskObj)=>
{
return TaskSchema(taskObj).save();
}


//#### read task
export const readTask=()=>
{
  return TaskSchema.find();
}
//####delete SINGLE task
 export const deleteTask= _id=>
 {
     return TaskSchema.findByIdAndDelete(_id);
 }
 //DELTE MULTIPLE TASK
 export const deleteMultipleTasks =ids=>

 {
     return TaskSchema.deleteMany({_id:{$in:ids}})

 }