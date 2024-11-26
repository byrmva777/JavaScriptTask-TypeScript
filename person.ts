interface PersonProperties {
  name: string;
  surname: string;
  email: string;
  password: string;
}

class Person {

  public name: string;
  public surname: string;
  protected email: string;
  private password: string;

  constructor({ name, surname, email, password }: PersonProperties) 
  {
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.password = password;
  }

  getInfo() 
  {
    console.log({
      name: this.name,
      surname: this.surname,
      email: this.email
    });
  }

   changeEmail(newEmail: string) 
   {
    this.email = newEmail;
    console.log("Email ugurla deyisdirildi.");
  }
}

const personProps: PersonProperties = {
  name: "Aygun",
  surname: "Bayramova",
  email: "bayramova777@gmail.com",
  password: "frdyte5465",
};

const person = new Person(personProps);

person.getInfo();
person.changeEmail("abayramova777@gmail.com");
person.getInfo();
