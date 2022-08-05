const UpdateTaskForm = ({updateData,changeTask,updateTask,cancelUpdate}) =>{
    return(
        <>
        <div className="row mb-4">
          <div className="col">
            <input
              value={updateData && updateData.title}
              onChange={(e) => changeTask(e)}
              className="form-control form-control-lg" />
          </div>
          <div className="col-auto">
            <button
              onClick={updateTask}
              className="btn btn-lg btn-success">Update Task</button>
          </div>
          <div className="col-auto">
            <button
              onClick={cancelUpdate}
              className="btn btn-lg btn-warning">Cancel</button>
          </div>
        </div>
        </>
    )
}
export default UpdateTaskForm