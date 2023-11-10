"use client"

import React from 'react'
import { Button } from '../ui/button';
import axios from "axios"

function CreateHabitForm() {

    const onSubmit = async () => {
        try {
          // Send the actual form values in the request
          const response = await axios.post('/api/habit/create', {
            habitMessage: "Party!!",
          });
          console.log('Response:', response.data);
        } catch (error) {
          alert('Error:');
        }
      };

  return (
    <div>
      <Button onClick={onSubmit}>Test submit</Button>
    </div>
  )
}

export default CreateHabitForm
