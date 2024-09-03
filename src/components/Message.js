import emailjs from '@emailjs/browser';
import './Form.css'
import  {useRef} from "react";
const Message = () => {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_ID', 'template_ID', form.current, 'public_KEY')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      };
    return(
<div className="conte">
    <form ref ={form} onSubmit={sendEmail}>
<input type ="text" name="user_name" placeholder="full name" required/>
<br/>
<input type ="email" name="user_email" placeholder="email" required/>
<br/>
<input type ="text" name="sunject" placeholder="subject" required/>
<br/>
<textarea name = "message" cols= "30" rows = "30"></textarea>
<br/>
<button type = "submit">e-mail</button>
<br/>
<p>alensanthosh2081@gmail.com</p>
    </form>
    
</div>

    )
}
export default Message;
