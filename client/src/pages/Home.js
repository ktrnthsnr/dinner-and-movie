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


const Home = () => {
  const { loading, data } = useQuery(QUERY_THOUGHTS);
  const { data: userData } = useQuery(QUERY_ME_BASIC);
  const thoughts = data?.thoughts || []; 
  const loggedIn = Auth.loggedIn();

  return (
    <main>

      <div className="d-flex justify-content-end">     

              {/* <div class="col-12 col-lg-3 mb-3"><div><h5></h5></div></div> */}

              <div className={`col-12 mb-3`}>
                      <h2>Watch a movie</h2>
                      <MovieContainer></MovieContainer>
                </div>

                {/* <div class="col-12 col-lg-3 mb-3"><div><h5></h5></div></div> */}

                <div className={`col-12 mb-3 `}>
                      <h2>Get takeout</h2>
                      <FoodContainer></FoodContainer>
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
