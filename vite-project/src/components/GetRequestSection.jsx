import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { fetchData } from '../services/apiServices';
import { UserCard } from './UserCard';

export const GetRequestSection = ({ isPostSuccess }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [apiData, setApiData] = useState();

  useEffect(() => {
    async function fetchDataForAllUsers() {
      setIsLoaded(false);

      try {
        const data = await fetchData();
        setApiData(data);
        setIsLoaded(true);
      } catch (error) {
        console.error('Fetch error:', error);
        setIsLoaded(true);
      }
    }

    fetchDataForAllUsers();
  }, [setApiData, isPostSuccess]);

  const fetchDataAndUpdate = async () => {
    setIsLoaded(false);

    try {
      const newData = await fetchData(apiData.links.next_url);
      setApiData(newData);
      setIsLoaded(true);
    } catch (error) {
      console.error('Fetch error:', error);
      setIsLoaded(true);
    }
  };

  return (
    <>
      {!isLoaded ? (
        <section className='section getRequest_section'>
          <div className='container getRequest_container'>
            <div className='lds-ring'>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </section>
      ) : (
        <section className='section getRequest_section'>
          <div className='container getRequest_container'>
            <h1>Working with GET request</h1>
            <ul className='user_list'>
              {apiData?.users.map((item) => (
                <UserCard key={item.id} item={item}></UserCard>
              ))}
            </ul>
            {apiData.links.next_url !== null && (
              <button disabled={false} onClick={fetchDataAndUpdate}>
                Show more
              </button>
            )}
          </div>
        </section>
      )}
    </>
  );
};

GetRequestSection.propTypes = {
  isPostSuccess: PropTypes.bool.isRequired,
};
