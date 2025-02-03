import { useQuery, gql } from '@apollo/client';
import './App.css';
import { Salon } from './components/salon';

const GET_SALONS = gql`
  query GetSalons {
    salons {
      id
      name
    }
  }
`

function App() {
  const { loading: salonsLoading, error: salonsError, data: salonsData } = useQuery(GET_SALONS);

  if (salonsLoading) {
    return '';
  }

  const { salons } = salonsData;

  console.log('salonsData', salonsData)

  return (
    <div className="App">
      <div className="flex flex-col gap-8">
        {salons.map((salon) => (
          <Salon salon={salon} />
        ))}
      </div>
    </div>
  );
}

export default App;
