app.factory("myfactory",()=>{
    var obj={
  taskArr:[],
        id:1,
 addTask(name,desc){ 
      var task=new Task(this.id,name,desc);
    
     this.taskArr.push(task);
      this.id++; 
      console.log(this.taskArr[0].desc);
     console.log(this.taskArr[0].name);
     console.log(this.taskArr[0].id);
  },
        removeTask(){
            this.taskArr.pop(this.taskArr.filter((taskobject)=>{
              taskobject.markforDeletion==false;  
            }))
            this.id--;
        }
       
}

    return obj;
})

        