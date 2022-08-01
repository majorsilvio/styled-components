import { useEffect } from "react";
import {
  BrowserRouter,
  Routes as Router,
  Route,
  useParams,
} from "react-router-dom";
import App from "./App";
import { CircularProgress } from './components/Progress/CircularProgress/index';
import CircularFloatProgress from './components/Progress/CircularFloatProgress/index';

const urls = [
    {
        path: '/',
        children: [
            //treste 
            {
                path: '',
                component: <App></App>,
                name: 'opa'
            },

            {
                path: 'teste',
                name: 'circular',
                children: [
                    {
                        path: '',
                        component: <CircularFloatProgress size="300px" progress={100}/>,
                        name: 'Float'
                    },
                    {
                        path: 'hotPotato',
                        component: <App />,
                        name: 'App  '
                    }
                ]
            },

            // jasfjaç
            
        ]
    }
]


function ObjectToRoutes(locales){
    const result = locales?.map(({path,component,name,children}) => {
        return <Route path={path} element={component} key={name} >{ObjectToRoutes(children)}</Route>
    })

    return result;
    
}


const Routes = () => {
  return (
    <BrowserRouter>
      <Router>
        {ObjectToRoutes(urls)}
      </Router>
    </BrowserRouter>
  );
};

export default Routes;
