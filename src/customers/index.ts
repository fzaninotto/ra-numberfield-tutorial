import PeopleIcon from "@mui/icons-material/People";
import type { Customer } from "../types";

export default {
  recordRepresentation: (record: Customer) =>
    `${record.first_name} ${record.last_name}`,
  icon: PeopleIcon,
};
