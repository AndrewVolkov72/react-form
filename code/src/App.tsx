import React, { useState } from 'react';
import { Button } from './components/Button/Button';
import { Form } from './components/Form/Form';
import { ModalLayout } from './components/ModalLayout/ModalLayout';

function App() {
  const [isFormOpen, setFormOpen] = useState(false)

  return (
    <div className='container'>
      <Button onClick={()=>setFormOpen(true)}>
        Создать форму
      </Button>
      {isFormOpen && 
        <ModalLayout onClose={()=>setFormOpen(false)}>
          <Form/>
        </ModalLayout>
      }
    </div>
  );
}

export default App;