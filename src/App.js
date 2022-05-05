import { useQuery } from 'react-query';
import './App.css';
import { Carousels } from './components/Carousel';
import { get_request } from './settings/axiosRequest';

function App() {
  const fetchSliderData = async () => {
    const response = await (get_request('http://localhost:3600/api/carousel/?slides=5'));
    return response.data.data;
  }
  const { isLoading, error, data } = useQuery("UpcomingMovie", fetchSliderData);

  if(isLoading) {
    return <div>Loading</div>
  }
  return (
    <div className="App">
      <Carousels
        slider={data.slider}
        infinite={true}
      />
    </div>
  );
}

export default App;
