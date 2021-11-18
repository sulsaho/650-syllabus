import './App.css';
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';
import {Stack} from "@mui/material";
//import {useEffect} from "react";
import {useState} from "react";

function App() {

  const [assignment1, setA1] =  useState('');
  const [assignment2, setA2] =  useState('');
  const [assignment3, setA3] =  useState('');
  const [assignment4, setA4] =  useState('');
  const [AWS, setAWS] =  useState('');
  const [paper, setPaper] =  useState('');
  const [presentation, setPresentation] =  useState('');
  const [result, setResult] = useState('');

  function handleA1 (event) {
    setA1(event.target.value)
  }

  function handleA2 (event) {
    setA2(event.target.value)
  }

  function handleA3 (event) {
    setA3(event.target.value)
  }
  
  function handleA4 (event) {
    setA4(event.target.value)
  }
  
  function handleAWS (event) {
    setAWS(event.target.value)
  }
  
  function handlePaper (event) {
    setPaper(event.target.value)
  }
  
  function handlePresentation (event) {
    setPresentation(event.target.value)
  }

  function calculate() {
    console.log("Hello");
    var a1 = parseInt(assignment1,10);
    var a2 = parseInt(assignment2,10);
    var a3 = parseInt(assignment3,10);
    var a4 = parseInt(assignment4,10);
    var aw = parseInt(AWS,10);
    var pp = parseInt(paper,10);
    var pr = parseInt(presentation,10);

    if (assignment1 && assignment1 && assignment3 && assignment3 && assignment4 && AWS && paper && presentation)
    {
       var result = a1 + a2 + a3 + a4 + aw + pp + pr;
       var resultText = result.toString() + "%";
       setResult(resultText);
    }
  
  }

  function clear(event) {
    //setA1();
    //setA2('');
    // setA3('');
    // setA4('');
    // setAWS('');
    // setPaper('');
    // setPresentation(event.target.value) = "";
    

  }


  return (


    <div className="App">
      <header className="App-header">
        <div className="Static">
          <h2>
            Course Description
          </h2>
          <p>
            The aim of this course is to acquaint students with cloud
            computing and provide them with a working knowledge for
            working and building these systems. The course discusses
            various topics and technologies related to Cloud Computing.
            Topics include distributed system models and enabling
            technologies, computer clusters for scalable Computing,
            virtual machines and virtualization of clusters and
            datacenters, design of cloud computing platforms, cloud
            programming and software environments (Workflow
            Systems, MapReduce, Google App Engine, Amazon AWS,
            Microsoft Azure, and emerging cloud software stacks), grid
            computing and resource management, P2P computing with
            overlay networks, ubiquitous computing with clouds and the
            Internet of things, and data-intensive distributed computing.
          </p>
        </div>

        <h2>Course objectives:</h2>
        <p>
            The students will:
            <ul>
              <li>Get familiar and understand the concepts of Cloud
              computing technologies and methods introduced</li>
              <li>Gain an understanding on how Cloud computing
              advance current technologies</li>
              <li>Gain practical experience using Cloud computing
              technologies</li>
            </ul>
        </p>

        <h2>Course outline and topics:</h2>
        <p>
          <ul>
            <li>Week 1-3: Introduction & Parallel and Distributed
              Computing</li>
            <li>Week 4-6: Virtualization & Cloud Computing
              Architectures</li>
            <li>Week 7-9: Concurrent Computing & High-throughput
              Computing</li>
            <li>Week 10-11: Data-Intensive Computing & Cloud
              Platform and Applications</li>
            <li>Week 12-13: Azure Assignment</li>
            <li>Week 14-16: Survey paper & Presentation</li>
        </ul>
        </p>

        <h2>Evaluation procedures and criteria:</h2>
        <p>
          The following grade distribution is used:
          <ul>
            <li>Assignments: 40% (4 assignments; 10% each)</li>
            <li>Azure assignment: 20%</li>
            <li>Paper: 30% (Choose a Cloud computing topic that
              interests you
              and write a review/survey paper - 4 pages; at least 12
              references; IEEE conference style).</li>
            <li>Presentation: 10%</li>
        </ul>
        </p>

        <h2>Grading Scale:</h2>
        <p>
          Grade &gt;= 90% is A<br></br>
          80% &gt;= Grade &lt; 90% is B<br></br>
          70% &gt;= Grade &lt; 80% is C<br></br>
          60% &gt;= Grade &lt; 70% is D<br></br>
          Grade &lt; 60% is F
        </p>

        <h2>Academic honesty statement:</h2>
        <p>
          The academic community is operated on the basis of
          honesty, integrity, and fair play. NDSU Policy 335: Code of
          Academic Responsibility and Conduct applies to cases in
          which cheating, plagiarism, or other academic misconduct
          have occurred in an instructional context. Students found
          guilty of academic misconduct are subject to penalties, up
          to and possibly including suspension and/or expulsion.
          Student academic misconduct records are maintained by
          the Office of Registration and Records. Informational
          resources about academic honesty can be found at
          <a href="https://www.ndsu.edu/academichonesty/">www.ndsu.edu/academichonesty</a>.
        </p>

        <h2>Course materials:</h2>
        <p>
          Course materials (study guide, lectures notes,
          assignments, etc.) will be posted on the class
          blackboard.
        </p>

        <h2>Textbook - required:</h2>
        <p>
          <strong>Mastering Cloud Computing: Foundations and
          Applications Programming</strong> by Buyya, Vecchiola, and
          Selvi, Morgan Kaufmann.
        </p>

        <h2>American Disabilities Act for Students with Special Needs:</h2>
        <p>
          Any students with disabilities or other special needs, who
          need special accommodations in this course, are invited to
          share these concerns or requests with the instructor and
          contact the <a href="https://www.ndsu.edu/disabilityservices/">Disability Services Office</a> as soon as possible.
        </p>

        <h2>Enter Scores:</h2>
        

        <Grid container direction={"row"} spacing={3}>
          <Grid item>
            <TextField id="outlined-basic" label="Assignment1 (10%)" variant="outlined" onChange={handleA1} />
          </Grid>
          <Grid item>
            <TextField id="outlined-basic" label="Assignment2 (10%)" variant="outlined" onChange={handleA2}/>
          </Grid>
          <Grid item>
            <TextField id="outlined-basic" label="Assignment3 (10%)" variant="outlined" onChange={handleA3}/>
          </Grid>
          <Grid item>
            <TextField id="outlined-basic" label="Assignment4 (10%)" variant="outlined" onChange={handleA4}/>
          </Grid>
          <Grid item>
            <TextField id="outlined-basic" label="AWS Assignment (20%)" variant="outlined" onChange={handleAWS}/>
          </Grid>
          <Grid item>
            <TextField id="outlined-basic" label="Paper (30%)" variant="outlined" onChange={handlePaper}/>
          </Grid>
          <Grid item>
            <TextField id="outlined-basic" label="Presentation (10%)" variant="outlined" onChange={handlePresentation}/>
          </Grid>
        </Grid>

        <div className="buttons">
          <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
              <Button
                  variant="outlined"
                  size="large"
                  color="primary"
                  onClick={calculate}>
                Caluclate
              </Button>
              <Button
                  variant="outlined"
                  size="large"
                  color="secondary"
                  onClick={clear}>
                Clear
              </Button>
          </Stack>
        </div>

        <div className="scores">
          <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
              <h2>Your Score is: {result}</h2>
          </Stack>
          
        </div>

      </header>
    </div>
  );
}

export default App;

/*
<div>
          <form noValidate autoComplete="off">
            <TextField id="outlined-basic" label="Assignment1 (10%)" variant="outlined" required fullWidth/>
            <TextField id="outlined-basic" label="Assignment2 (10%)" variant="outlined" />
          </form>
        </div>*/
