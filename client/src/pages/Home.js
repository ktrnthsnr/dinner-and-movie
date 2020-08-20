import React from 'react';
// new -- import the apollo hooks
import { useQuery } from '@apollo/react-hooks';
import ThoughtList from '../components/ThoughtList';
import ThoughtForm from '../components/ThoughtForm';
import FriendList from '../components/FriendList';

// new -- add JSON web token (JWT)
import Auth from '../utils/auth';
// new -- import queries
import { QUERY_THOUGHTS, QUERY_ME_BASIC} from '../utils/queries';
import FoodContainer from '../components/Food';
import MovieContainer from '../components/Movie';
import SearchContainer from '../components/Search';


const Home = () => {
  const { loading, data } = useQuery(QUERY_THOUGHTS);
  const { data: userData } = useQuery(QUERY_ME_BASIC);
  const thoughts = data?.thoughts || []; 
  const loggedIn = Auth.loggedIn();

  return (
    <main className='flex-row justify-center mb-4'>
      <div className='col-12 col-md-6'>
        <div className='card'>
          <h3 className='card-header'>Takeout and Movies </h3>
          <div className='card-body'>


      <div className="d-flex justify-content-end">     

              {/* <div className={`col-12 mb-3`}>
                      <h2>Watch a movie</h2>
                      <div class="indent"> <MovieContainer></MovieContainer> </div>
                </div> */}

                <div className={`col-12 mb-3 `}>
                      <h2>Locate a Restaurant Nearby</h2>
                      <div ><FoodContainer></FoodContainer> </div>
                </div>
                
                <div className={`col-12 mb-3`}>
                    <h2>Type a movie name to see reviews</h2>         
                    <SearchContainer></SearchContainer>
                  
                 <div className={`col-12 mb-3`}>
                        <h2>Watch together</h2>  
                        </div>   
                            <div class="link">
                              <div class="indent">
                              <a href="https://www.cnet.com/how-to/still-havent-tried-netflix-party-with-your-friends-heres-how-to-watch-movies-together-for-free/">Setup a Netflix Party</a>
                              </div>  
                              <div class="indent">
                              <a href="https://zoom.us/">Zoom video conferencing</a>
                              </div>  
                              <div class="indent">
                              <a href="https://www.skype.com/en/features/screen-sharing/">Skype screen sharing</a>
                              </div>    
                            </div> 
                    </div>                      
        </div> 
    </div>
  </div>
</div>

      <div className="flex-row justify-space-between">   
      

        {loggedIn && (

          <div className="col-12 mb-3">
            <ThoughtForm />
          </div>
        )}      
          <div className={`col-12 mb-3 ${loggedIn && 'col-lg-8'}`}>
              {loading ? (
                <div>Loading...</div>
             ) : (
                <ThoughtList thoughts={thoughts} title="Discuss with friends:" />
              )}
            </div>

              {/* {loggedIn && userData ? (
                <div className="col-12 col-lg-3 mb-3">
                  <FriendList
                    username={userData.me.username}
                    friendCount={userData.me.friendCount}
                    friends={userData.me.friends}
                    />
                </div>
          ) : null} */}


    </div>
  </main>
  );
};


export default Home;
