import styled from "styled-components";
import { useEffect, useState } from 'react';
import useSpotify from "./services/spotify";

function App() {

  const spotify = useSpotify();

  const [list,setList] = useState<any>()
  useEffect(() => {

    async function log(){
      setList(await spotify.getPlayLists())
    }

    log()

  },[])

  return (
    <pre>
      {JSON.stringify(list.items[0])}
    </pre>
  );
}

export default App;