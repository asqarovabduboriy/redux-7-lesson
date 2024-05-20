import { useState } from "react";
import React from "react";
import "./Contact.css";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const Bot_token = "7103158799:AAFA8uad4zRHrA7_OffopReurqjuv2_Ryac";
const Chat_id = "-4273591369";
const user_id = "1429084268";

const form = {
  name: "Abduboriy",
  email: "asqarova@gmail.com",
  phone: "998946202661",
};

const Contact = () => {
  const [formState, setFormState] = useState(form);
  const catrt = useSelector((state) => state.cart.value);
  console.log(catrt);
  let text = "";

  const handleChange = (e) => {
    e.preventDefault();
    console.log(formState);
    setFormState(form);
    catrt.forEach((el) => {
      text = "Buyutmat: %0A %0A";
      text += `ismi: ${formState.name} %0A`;
      text += `email: ${formState.email} %0A`;
      text += `phone: ${formState.phone} %0A`;
      text += `Noomi: ${el.title} %0A`;
      text += ` Narxi: ${el.price} %0A `;
      text += `Soni: ${el.quantity} %0A %0A`;
    });
    toast.success("Buyurtmangiz qabul qilindi");


    let url = `https://api.telegram.org/bot${Bot_token}/sendMessage?chat_id=${Chat_id}&text=${text} `;

    let xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.send();
  };

  return (
    <>
      <div className="container">
        <div className="form_wrapper">
          <form onSubmit={handleChange} className="form">
            <label>Name</label>
            <input
              value={formState.name}
              onChange={(e) =>
                setFormState({ ...formState, name: e.target.value })
              }
              required
              type="text"
              placeholder="Name"
            />
            <label>Email</label>
            <input
              value={formState.email}
              onChange={(e) =>
                setFormState({ ...formState, email: e.target.value })
              }
              required
              type="email"
              placeholder="Email"
            />
            <label>Phone number</label>
            <input
              value={formState.phone}
              onChange={(e) =>
                setFormState({ ...formState, phone: e.target.value })
              }
              required
              type="number"
              pattern="^\+998\s\d{2}\s\d{3}\s\d{2}\s\d{2}$
"
              placeholder="+998 XX XX XX XX"
            />
            <button>Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
