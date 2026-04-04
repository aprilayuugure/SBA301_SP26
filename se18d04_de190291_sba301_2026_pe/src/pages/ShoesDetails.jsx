import { useEffect } from "react";
import { Container, Table } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { useShoesContext } from "../contexts/ShoesContext";

function fmt(d) {
  if (!d) return "—";
  const x = new Date(d);
  return Number.isNaN(x.getTime()) ? String(d) : x.toLocaleDateString("en-GB");
}

function ShoesDetails() {
  const { id } = useParams();
  const { state, getShoesById } = useShoesContext();

  useEffect(() => {
    getShoesById(id);
  }, [id]);

  const s = state.shoes;

  return (
    <Container>
      <Link to="/" className="small">
        ← Back
      </Link>
      <h2 className="h4 mt-2 mb-3">Details</h2>
      <Table bordered size="sm" style={{ maxWidth: "28rem" }}>
        <tbody>
          <tr>
            <td>Name</td>
            <td>{s?.shoesName}</td>
          </tr>
          <tr>
            <td>Manufacturer</td>
            <td>{s?.manufacturer}</td>
          </tr>
          <tr>
            <td>Category</td>
            <td>{s?.categoryName}</td>
          </tr>
          <tr>
            <td>Price</td>
            <td>{s?.price}</td>
          </tr>
          <tr>
            <td>Production</td>
            <td>{fmt(s?.productionDate)}</td>
          </tr>
          <tr>
            <td>Import</td>
            <td>{fmt(s?.importDate)}</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}

export default ShoesDetails;
