import { useQuery, gql } from "@apollo/client"
import { AppointmentForm } from "./appointmentForm"

const APPOINTMENTS_QUERY = gql`
  query GetAppointments($salonId: ID!) {
    appointments(salonId: $salonId) {
      id
      service
      time
    }
  }
`

const Salon = ({ salon }) => {
  const { data: appointmentsData, loading, error } = useQuery(APPOINTMENTS_QUERY, { variables: { salonId: salon.id }});

  if (loading) {
    return '';
  }

  const { appointments } = appointmentsData;

  return (
    <div>
      <h3 className="text-3xl font-bold">Salon: {salon.name}</h3>

      {appointments.map((appointment) => (
        <div>
          {appointment.time}: {appointment.service}
        </div>
      ))}

      <AppointmentForm salon={salon} />
    </div>
  )
}

export { Salon }
