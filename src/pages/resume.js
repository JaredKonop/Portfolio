/*import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../components/Particles";
import pdf from "../Assets/KonopResume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "../styles/styles.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function Resume() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getScaleValue = () => {
    if (width > 1200) {
      return 1.7;
    } else if (width > 992) {
      return 1.5;
    } else if (width > 768) {
      return 1.2;
    } else {
      return 1;
    }
  };

  return (
    <div className="resume-container">
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <h2 className="resume-title">Resume</h2>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download Resume
          </Button>
        </Row>
        <div className="pdf-container">
          <Document
            file={pdf}
            renderMode="canvas"
            className="d-flex justify-content-center"
          >
            <Page pageNumber={1} scale={getScaleValue()} />
          </Document>
        </div>
        <Row style={{ justifyContent: "center", position: "relative" }}></Row>
      </Container>
    </div>
  );
}

export default Resume;
*/
import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../components/Particles";
import BasicExample from "../components/NavBar";
import pdf from "../Assets/KonopResume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "../styles/styles.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function Resume() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getScaleValue = () => {
    if (width > 1200) {
      return 1.7;
    } else if (width > 992) {
      return 1.5;
    } else if (width > 768) {
      return 1.2;
    } else {
      return 1;
    }
  };

  return (
    <div className="resume-container">
      <Container fluid className="resume-section content">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <h2 className="resume-title">Resume</h2>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download Resume
          </Button>
        </Row>
        <div className="pdf-container">
          <Document
            file={pdf}
            renderMode="canvas"
            className="d-flex justify-content-center"
          >
            <Page pageNumber={1} scale={getScaleValue()} />
          </Document>
        </div>
        <Row style={{ justifyContent: "center", position: "relative" }}></Row>
      </Container>
    </div>
  );
}

export default Resume;
