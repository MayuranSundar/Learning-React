import * as ReactDOM from 'react-dom/client';
import './index.css';

import Header from "./Header"
import Footer from "./Footer"
import Content from "./Content"

function App(){
    return(
        <div>
            <Header/>
            <Content/>
            <Footer/>
        </div>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App/>)
