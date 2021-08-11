class Auth{
    constructor(){}

    static isAdmin = false;

    static changeAdmin(){
        if(this.isAdmin == false){
            this.isAdmin = true;
        }else if (this.isAdmin == true){
            this.isAdmin = false;
        } 
    }
};

module.exports = {
    Auth : Auth
}