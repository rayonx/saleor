import { storiesOf } from "@storybook/react";
import * as React from "react";

import OrderMarkAsPaidDialog, {
  OrderMarkAsPaidDialogProps
} from "../../../orders/components/OrderMarkAsPaidDialog";
import Decorator from "../../Decorator";

const props: OrderMarkAsPaidDialogProps = {
  onClose: () => undefined,
  onConfirm: () => undefined,
  open: true
};

storiesOf("Orders / OrderMarkAsPaidDialog", module)
  .addDecorator(Decorator)
  .add("default", () => <OrderMarkAsPaidDialog {...props} />);
