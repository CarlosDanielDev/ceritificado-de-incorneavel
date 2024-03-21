import { useState } from 'react'
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { Certify } from './components';
import { useForm } from 'react-hook-form';
import './App.css'

type FormStateProps = {
  email: string
  date: string
  name: string
}

function App() {
  const { register, handleSubmit } = useForm<FormStateProps>();

  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [email, setEmail] = useState('');
  const [active, setActive] = useState<'form' | 'certify'>('form')


  const onSubmit = handleSubmit(data => {
    setName(data.name)
    setEmail(data.email)
    setDate(data.date)
    setActive('certify');
  });

  const generatePDF = () => {

    const input = document.getElementById('certificado');
    if (!input) return
    html2canvas(input, {
      width: input.offsetWidth,
      height: input.offsetHeight
    })
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdfWidth = input.offsetWidth;
        const pdfHeight = input.offsetHeight;

        const pdf = new jsPDF({
          orientation: 'landscape',
          unit: 'px',
          format: [pdfWidth, pdfHeight]
        });

        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save('certificado-incorneavel.pdf');
      });
  };

  return (
    <div>
      {active === 'form' ? (
        <form
          onSubmit={onSubmit}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 16
          }}
        >
          <h1>QUERO DEIXAR DE SER CORNO!!</h1>
          <input type="text"  {...register('name', { required: true })} placeholder="Nome" />
          <input type="date" {...register('date', { required: true })} placeholder="Data" />
          <input type="email" {...register('email', { required: true })} placeholder="E-Mail" />
          <button type='submit'>Deixar de ser corno!</button>
        </form>
      ) : (
        <div>
          <Certify name={name} date={date} email={email} />
          <button type='button' onClick={generatePDF}>Baixar meu certificado de incorneável!!</button>
        </div>
      )}
    </div>
  )
}

export default App
