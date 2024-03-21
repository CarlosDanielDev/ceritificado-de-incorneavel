import React from "react";

type CertifyProps = {
  name: string
  email: string
  date: string
}

export const Certify: React.FC<CertifyProps> = ({ date, name, email }) => (
  <div
    id="certificado"
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      width: '800px',
      height: '600px',
      border: '1px solid black',
      textAlign: 'center',
      padding: '50px',
      background: 'black',
      position: 'relative'
    }}>
    <p style={{ color: 'red', zIndex: 15, top: '8%', right: '10%', fontWeight: 'bold', fontSize: 15, position: 'absolute' }}>ICORNEAVEL</p>
    <div
      style={{
        position: 'absolute',
        top: '5%',
        right: '10%',
        zIndex: 10,
      }}
    >
      <img src='./stamp.png' width={100} height={100} />
    </div>

    <h1 style={{ color: 'white' }}>Certificado de Incorneável</h1>
    <p style={{ color: 'white' }}>Este certificado é concedido a</p>
    <h2 style={{ color: 'white' }}>{name}</h2>
    <p style={{ color: 'white' }}>por ser incorneável</p>
    <p style={{ color: 'white' }}>{date} - {email}</p>
  </div>
);
