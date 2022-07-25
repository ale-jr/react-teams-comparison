import { faDownload } from "@fortawesome/free-solid-svg-icons";
import Button from "components/atoms/Button";
import ComparisonTableContainer from "containers/ComparisonTableContainer";
import { PageContainer } from "./style";

const ComparisonTablePage: React.FC = () => {
  return (
    <PageContainer>
      <div className="page-header">
        <h1>Comparison</h1>
        <Button startIcon={faDownload}>Export</Button>
      </div>
      <ComparisonTableContainer />
    </PageContainer>
  );
};

export default ComparisonTablePage;
