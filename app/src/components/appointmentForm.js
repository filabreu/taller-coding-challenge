import { useState } from "react"
import { gql, useMutation } from "@apollo/client"

const CREATE_APPOINTMENT_MUTATION = gql`
  mutation CreateAppointment($input: AppointmentInput!) {
    createAppointment(input: $input) {
      id
      salonId
      service
      time
    }
  }
`

const AppointmentForm = ({ salon }) => {
  const [showForm, setShowForm] = useState()
  const [createAppointment] = useMutation(CREATE_APPOINTMENT_MUTATION)

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    console.log('formData', Object.fromEntries(formData))

    createAppointment({
      variables: { input: Object.fromEntries(formData) },
      refetchQueries: ['GetAppointments']
    })
      .then(() => {
        setShowForm(false);
      })
      .catch(err => console.error(err))
  }

  if (!showForm) {
    <button onClick={() => setShowForm(true)}>Add new Appointment</button>
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="hidden" name="salonId" value={salon.id} />
      <div className="flex flex-col gap-4">
        <div>
          <label>Service</label>
          <input className="border" type="text" name="service" />
        </div>
        <div>
          <label>Time</label>
          <input className="border" type="text" name="time" />
        </div>
        <div>
          <button className="p-4 bg-slate-200 border rounded-2xl" type="submit">Create Appointment</button>
        </div>
      </div>
    </form>
  )
}

export { AppointmentForm }
