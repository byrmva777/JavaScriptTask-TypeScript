class Person {
  
    constructor(name, surname, email, password) 
    {
      this.name = name; 
      this.surname = surname; 
      this._email = email; 
      this.password = password; 
    }
  
    getInfo() 
    {
      console.log({ name: this.name, surname: this.surname, email: this._email });
    }
  
    changeEmail(newEmail) 
    {
      this._email = newEmail;
      console.log("Email ugurla deyisdirildi.");
    }
  }
  
  const person = new Person("Aygun", "Bayramova", "bayramova777@gmail.com", "frdyte5465");
  
  person.getInfo();
  person.changeEmail("abayramova777@gmail.com");
  person.getInfo();
  