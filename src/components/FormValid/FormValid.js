import React, {useState} from 'react'
import {Form} from 'react-bootstrap'
import {Button} from 'react-bootstrap'
import './FormValid.sass'

export default function FormValid() {
 const [validated, setValidated] = useState(false);

 const handleSubmit = event => {
   const form = event.currentTarget;
   if (form.checkValidity() === false) {
     event.preventDefault();
     event.stopPropagation();
   }

   setValidated(true);
 };

 return (
  <Form noValidate validated={validated} onSubmit={handleSubmit} className="form">
   <Form.Row>
    <Form.Group controlId="validationCustom01">
      <Form.Control
        required
        type="text"
        // pattern="[A-Za-z]"
        placeholder="Имя"
        defaultValue=""
      />
      <Form.Control.Feedback>
       Looks good!
      </Form.Control.Feedback>
      <Form.Control.Feedback type="invalid">
      Please provide a name
     </Form.Control.Feedback>
    </Form.Group>

    <Form.Group controlId="formGridPassword">
     <Form.Control
       required
       type="email"
       placeholder="Enter email"
       defaultValue=""
     />
     <Form.Control.Feedback type="invalid">
      Please include an '@' 
      </Form.Control.Feedback>
    </Form.Group>

    <Form.Group controlId="validationCustomUsername">
     <Form.Control
       type="tel"
       pattern="[0-9]{10}"
       placeholder="Телефон"
       required
     />
     <Form.Control.Feedback type="invalid">
      Please provide a valid number
     </Form.Control.Feedback>
    </Form.Group>

    <Form.Group controlId="validationCustom03" className="country">
     <Form.Control as="select" placeholder="Страна тура" required>
      <option className="item">Турция</option>
      <option className="item">Египет</option>
      <option className="item">Шри-Ланка</option>
      <option className="item">Доминикана</option>
     </Form.Control>
     <Form.Control.Feedback type="invalid">
      Please provide a valid city.
     </Form.Control.Feedback>
    </Form.Group>
    
    <Button type="submit" className='btn-offer form__btn'>Получить предложение</Button>
    
    </Form.Row>
   </Form>
 )
}
