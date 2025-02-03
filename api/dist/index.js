import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
let salons = [
    {
        id: 1,
        name: 'Salon A',
    },
    {
        id: 2,
        name: 'Salon B',
    },
];
let appointments = [];
const typeDefs = `#graphql
  type Salon {
    id: ID!
    name: String
  }

  type Appointment {
    id: ID!
    salonId: ID!
    service: String
    time: String
  }

  input AppointmentInput {
    salonId: ID!
    service: String
    time: String
  }

  type Query {
    appointments(salonId: ID!): [Appointment]
    salons: [Salon]
  }

  type Mutation {
    createAppointment(input: AppointmentInput!): Appointment
    updateAppointment(id: ID!, input: AppointmentInput!): Appointment
    deleteAppointment(id: ID!): Boolean
  }
`;
const resolvers = {
    Query: {
        appointments: (parent, args, ctx) => appointments.filter((item) => item.salonId === args.salonId),
        salons: () => salons
    },
    Mutation: {
        createAppointment: (parent, args, ctx) => {
            const newAppointment = { ...args.input, id: appointments.length };
            appointments.push(newAppointment);
            return (newAppointment);
        },
        updateAppointment: (parent, args, ctx) => {
            const i = appointments.find((item) => item.id === args.id);
            appointments = [
                ...appointments.slice(0, i),
                args.input.appointment,
                ...appointments.slice(i),
            ];
            return args.input.appointment;
        },
        deleteAppointment: (parent, args, ctx) => {
            const i = appointments.find((item) => item.id === args.id);
            appointments = [
                ...appointments.slice(0, i),
                ...appointments.slice(i),
            ];
            return true;
        },
    }
};
const server = new ApolloServer({
    typeDefs,
    resolvers,
});
const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
});
console.log(`🚀  Server ready at: ${url}`);
