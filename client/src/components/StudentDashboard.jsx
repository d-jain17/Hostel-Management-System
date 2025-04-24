import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
  } from "@/components/ui/menubar"
function StudentDashboard() {
  return (
    <div>
        <Menubar>
  <MenubarMenu>
    <MenubarTrigger>Hostel Management System</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>
        New Tab <MenubarShortcut>⌘T</MenubarShortcut>
      </MenubarItem>
      <MenubarItem>New Window</MenubarItem>
      <MenubarSeparator />
      <MenubarItem>Share</MenubarItem>
      <MenubarSeparator />
      <MenubarItem>Print</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
</Menubar>
<Row className='mt-3 mx-5'>
        <Col>
        <Card className="text-center" bg='info' text='white'>
      <Card.Header>1</Card.Header>
      <Card.Body>
        <Card.Title>Attendance</Card.Title>
        <Card.Text>
          This section gives you information about changes in in-time and a daily reminder to mark your attendance.
        </Card.Text>
        
      </Card.Body>
      <Card.Footer className="text-muted"><Button variant="light">Go somewhere</Button></Card.Footer>
    </Card>
        </Col>
        <Col>
        <Card className="text-center" bg='warning' text='white'>
      <Card.Header>2</Card.Header>
      <Card.Body>
        <Card.Title>Total Rooms</Card.Title>
        <Card.Text>
          This section contains the information related to number of rooms, room allocation, etc
        </Card.Text>
        
      </Card.Body>
      <Card.Footer className="text-muted"><Button variant="light">View Details</Button></Card.Footer>
    </Card>
        </Col>
        <Col>
        <Card className="text-center" bg='success' text='white'>
      <Card.Header>3</Card.Header>
      <Card.Body>
        <Card.Title>Today's Meal Plan</Card.Title>
        <Card.Text>
          This section provides details about meal plan.Kindly cancel your meal on priority basis if you don't want it .
        </Card.Text>
        
      </Card.Body>
      <Card.Footer className="text-muted"><Button variant="light">View Details</Button></Card.Footer>
    </Card>
        </Col>
      </Row>

      {/* Notice Board */}
      <Card className='mt-5 mx-5'>
      <Card.Header>Notice Board</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-2">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            posuere erat a ante.
          </p>
          <footer className="blockquote-footer">
            Someone famous in <cite title="Source Title">Source Title</cite>
          </footer>
        </blockquote>
        <blockquote className="blockquote mb-2">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            posuere erat a ante.
          </p>
          <footer className="blockquote-footer">
            Someone famous in <cite title="Source Title">Source Title</cite>
          </footer>
        </blockquote>
        <blockquote className="blockquote mb-2">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            posuere erat a ante.
          </p>
          <footer className="blockquote-footer">
            Someone famous in <cite title="Source Title">Source Title</cite>
          </footer>
        </blockquote>
      </Card.Body>
    </Card>


    <Row className='mt-3 mx-5'>
        <Col>
        <Card className="text-center" bg='info' text='white'>
      <Card.Header>1</Card.Header>
      <Card.Body>
        <Card.Title>Room Application</Card.Title>
        <Card.Text>
          This section lets you apply for the room that you want. As soon as vacancy opens up, the selected room would be allocated after reviewing your details
        </Card.Text>
        
      </Card.Body>
      <Card.Footer className="text-muted"><Link to='/student/roomApplication'><Button variant="light">Apply Now</Button></Link></Card.Footer>
    </Card>
        </Col>
        <Col>
        <Card className="text-center" bg='warning' text='white'>
      <Card.Header>2</Card.Header>
      <Card.Body>
        <Card.Title>Complaints & Maintainence</Card.Title>
        <Card.Text>
          This section lets you raise complaints regarding maintainence of hostel. You can raise complaints, track status and recieve resolution updates too.
        </Card.Text>
        
      </Card.Body>
      <Card.Footer className="text-muted"><Button variant="light">Raise Complaint</Button></Card.Footer>
    </Card>
        </Col>
        
      </Row>
    </div>
  )
}

export default StudentDashboard;