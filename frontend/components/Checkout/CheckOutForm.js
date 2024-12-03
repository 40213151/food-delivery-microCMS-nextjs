import { FormGroup, Input, Label } from "reactstrap";

const CheckOutForm = () => {
  return (
    <div className="paper">
      <h5>あなたの情報</h5>
      <hr />
      <FormGroup>
        <div>
          <Label>住所</Label>
          <Input name="address" />
        </div>
      </FormGroup>
    </div>
  );
};

export default CheckOutForm;
