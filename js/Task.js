class Task{
    constructor(id,name,desc,active="Y"){
        this.id=id;
        this.name=name;
        this.desc=desc;
        this.active=active;
        this.markforDeletion=false;
        this.markforEdit=false;
    }
    toggle(){
        this.markforDeletion=!this.markforDeletion;
    }
}