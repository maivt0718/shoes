class Customer{
    name = "";
    password = "";
    email = "";
    bod = "";
    gender = "";
    phone = "";

    getName = () => {
        return  this.name;
    }

    setGender = (value) =>{
        switch (value) {
            case "Others":
                this.gender = false;
                break;
            default:
                this.gender = true;
        }
    }
}