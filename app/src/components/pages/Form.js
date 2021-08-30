import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import './Form.css';
import { Link } from 'react-router-dom';

const Contact = () => {

  const handleSubmit = (e) => {
    alert('Form Working');
  }

  return (
    <form onSubmit={handleSubmit}>      
    <input name="name" type="text" class="feedback-input" placeholder="Name" />   
    <input name="email" type="text" class="feedback-input" placeholder="Pin code" />
    <input name="gender" type="text" class="feedback-input" placeholder="Gender" />
    <input name="age" type="text" class="feedback-input" placeholder="Age" />
    <textarea name="text" class="feedback-input" placeholder="Prefered area for hospital"></textarea>
    <Link to='/results' >
    <input type="submit" value="SUBMIT"/>
    </Link>
  </form>
  );
};

export default Contact;