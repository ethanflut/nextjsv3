// app/not-found.tsx
import React from 'react';

export default function NotFound() {
  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundImage: 'url("/background5.png")',  // Ruta de la imagen en la carpeta public
      backgroundSize: 'cover',  // Asegura que la imagen cubra todo el fondo
      backgroundPosition: 'center',  // Centra la imagen
      color: 'white',
      flexDirection: 'column'
    }}>
      <h1 style={{ fontSize: '5rem', textShadow: '2px 2px 10px rgba(0, 0, 0, 0.7)' }}>404</h1>
      <p style={{ fontSize: '1.5rem', textShadow: '2px 2px 10px rgba(0, 0, 0, 0.7)' }}>Si viniste del boton "ingresar uwu" eres un pendejo:v, nomentira, aun se esta estructurando esta parte, no seas precoz</p>
      <p>si viniste de algun otro lado... QUE ESTAS INTENTADO? aloh fbi, intruso cerca v:</p>
    </div>
  );
}
