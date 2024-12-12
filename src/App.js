import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { Typography } from "./components/Typography";
import { Heading } from "./components/Heading";
import Tooltip from "./components/Tooltip";
import Accordion from "./components/Accordin";
function App() {
  return(
    <div className='App'>
      <div class="container">
      <div class="buttons">
        <div>
        <Button size="lg" >lg, primary</Button>
        <Button size="mg">md, primary</Button>
        <Button >sm, primary</Button>
        </div>
        <div>
        <Button size="lg" variant="border">lg, bordered</Button>
        <Button size="mg" variant="border">mg, bordered </Button>
        <Button size="sm" variant="border">sm, bordered</Button>
        </div>
      </div>
      
      <div class="inputs">
        <Input label="Name"></Input>
        <Input label="Name"></Input>
        <Input danger label="Name"></Input>
      </div>
      <div class = "Typography">
          <Typography size="sm"></Typography>
          <Typography size="md"></Typography>
          <Typography size="lg"></Typography>
      </div>
      <div class="heading"> 
        <Heading size="1">Heading1</Heading>
        <Heading size="2">Heading2</Heading>
        <Heading size="3">Heading3</Heading>
        <Heading size="4">Heading4</Heading>
        <Heading size="5">Heading5</Heading>
        <Heading size="6">Heading6</Heading>
      </div>
       
       <div class="tooltip" >
          <div style={{ textAlign: "", marginTop: "50px" }}>
          
          <div style={{ margin: "20px" }}>
            <Tooltip position="top" text="Tooltip text">
              <p>Top Tooltip</p>
            </Tooltip>
          </div>
          <div style={{ margin: "20px" }}>
            <Tooltip position="left" text="Tooltip text">
              <p>Left Tooltip</p>
            </Tooltip>
            <Tooltip position="right" text="Tooltip text">
              <p>Right Tooltip</p>
            </Tooltip>
          </div>
          <div style={{ margin: "20px" }}>
            <Tooltip position="bottom" text="Tooltip text">
              <p>Bottom Tooltip</p>
            </Tooltip>
          </div>
    </div>
       </div>

        <div class="accord">
        <div style={{ margin: "20px" }}>
      <Accordion
        title="Accordion 1"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      
    </div>
        </div>
      </div>

    </div>
    
  )
}

export default App;
