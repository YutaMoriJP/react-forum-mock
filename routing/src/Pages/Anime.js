import React, { useState, useEffect } from "react";
import {
  Switch,
  useRouteMatch,
  useParams,
  Route,
  useHistory,
  useLocation,
} from "react-router-dom";
import { SubNavbar } from "../Components/Navbar";
import fetchLocal from "../util/useFetchLocal";
import data from "../data/anime.json";
import { useUser } from "../ContextProvider/UserContext";
import styled from "styled-components";
import Button from "../util/Button";

const AnimePage = ({ animeLists }) => {
  const { animeID } = useParams();
  if (
    !animeLists.some(
      animeList =>
        animeList?.name.toUpperCase() ===
        animeID.replace(/[-]/, " ").toUpperCase()
    )
  ) {
    return null;
  }
  const [{ name, description, status }] = animeLists.filter(
    animeList =>
      animeList?.name.toUpperCase() ===
      animeID.replace(/[-]/, " ").toUpperCase()
  );
  return (
    <>
      <h1>{name}</h1>
      <p>{description}</p>
      <p>{status}</p>
    </>
  );
};

const Title = styled.section`
  display: flex;
  h1 {
    flex: 1 1 auto;
  }
  button {
    align-self: center;
  }
`;

const Anime = () => {
  const [animeLists, setAnimeList] = useState([]);
  const [loading, setLoading] = useState(true);
  const { userInfo, setUserInfo } = useUser();
  const match = useRouteMatch();
  const history = useHistory();
  const location = useLocation();
  console.log(location);
  useEffect(() => {
    const localFetch = async () => {
      const res = await fetchLocal(data);
      setLoading(false);
      setAnimeList(res);
    };
    localFetch();
  }, []);
  return (
    <>
      <Title>
        <h1>Anime Page</h1>
        {userInfo.loggedIn && (
          <Button onClick={() => setUserInfo({ loggedIn: false })}>
            Logout
          </Button>
        )}
      </Title>
      {userInfo.loggedIn && <h3>Hi, {userInfo.username}</h3>}
      <Button onClick={() => history.goBack()}>Go back</Button>
      <Button onClick={() => history.goForward()}>Go Forward</Button>
      {!loading && (
        <SubNavbar
          path={match.path}
          items={animeLists.map(anime => anime.name.replace(/\s+/g, "-"))}
        />
      )}
      <h3>{loading && "Loading..."}</h3>
      {!loading && (
        <Switch>
          <Route path={`${match.path}/:animeID`}>
            <AnimePage animeLists={animeLists} />
          </Route>
        </Switch>
      )}
    </>
  );
};

export default Anime;
