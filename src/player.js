class Player {
    constructor(name, id, image,) {
        //actionRequired = false;
        this.name = name;
        this.id = id || Date.now()
        this.image = image;
        //this.actionRequired = actionRequired == undefined ? false : actionRequired;
        this.actionRequired = false;
        this.gameHistory = [];
    }

    saveUserInStorage() {
        var userToStore = {id: this.id, name: this.name, image: this.image, gameHistory: this.gameHistory}
        var stringifiedUser = JSON.stringify(userToStore)
        localStorage.setItem(`storedIdea${this.id}`, stringifiedUser) 
    }   

    getUserGameRecord() {
        retrieveFromStorage()
        displayRecord()
        displayWinBoards()
    }

    
    updateActionStatus() {
        this.actionRequired = true !== false ? false:true;
    }

    //id == user input
    //loop to check if id has been used previously, if not, then ok, else 'pick new name'
}
