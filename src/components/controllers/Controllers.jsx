import SearchPanel from "./SearchPanel.jsx";
import { Col, Row } from "reactstrap";
import FilterController from "./FilterController.jsx";
import ViewController from "./ViewController.jsx";
import BulkController from "./BulkController.jsx";

const Controllers = () => {
  return (
    <div>
      <SearchPanel />
      <Row className={"my-4"}>
        <Col md={{ size: 4 }}>
          <FilterController />
        </Col>
        <Col md={{ size: 4 }}>
          <ViewController />
        </Col>
        <Col md={{ size: 4 }}>
          <BulkController />
        </Col>
      </Row>
    </div>
  );
};

export default Controllers;
