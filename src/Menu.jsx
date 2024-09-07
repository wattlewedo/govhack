import { Button, ButtonGroup } from 'react-bootstrap'

const Menu = () => {
  return (
    <ButtonGroup className="Menu">
        <Button>Map</Button>
        <Button>Camera</Button>
        <Button>Log</Button>
        <Button>Account</Button>
    </ButtonGroup>
  );
};

export default Menu;