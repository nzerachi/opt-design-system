import type { Meta, StoryObj } from "@storybook/react-vite";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell, TableCaption } from "./Table";
import { Badge } from "../inputs/Badge";

const meta: Meta<typeof Table> = {
  title: "Components/Data Display/Table",
  component: Table,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Table>;

const data = [
  { name: "Alice Nguyen", email: "alice@example.com", role: "Admin",  status: "active" },
  { name: "Bob Chen",     email: "bob@example.com",   role: "Editor", status: "active" },
  { name: "Carol Davis",  email: "carol@example.com", role: "Viewer", status: "inactive" },
  { name: "Dave Kim",     email: "dave@example.com",  role: "Editor", status: "active" },
];

export const Default: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((row) => (
          <TableRow key={row.email}>
            <TableCell className="font-medium">{row.name}</TableCell>
            <TableCell>{row.email}</TableCell>
            <TableCell>{row.role}</TableCell>
            <TableCell>
              <Badge variant={row.status === "active" ? "success" : "neutral"}>
                {row.status}
              </Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableCaption>Team members (4 total)</TableCaption>
    </Table>
  ),
};

export const WithSortableHeaders: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead sortable sortDirection="asc" onSort={() => {}}>Name</TableHead>
          <TableHead sortable sortDirection={false} onSort={() => {}}>Email</TableHead>
          <TableHead sortable sortDirection="desc" onSort={() => {}}>Role</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((row) => (
          <TableRow key={row.email} clickable>
            <TableCell className="font-medium">{row.name}</TableCell>
            <TableCell>{row.email}</TableCell>
            <TableCell>{row.role}</TableCell>
            <TableCell>
              <Badge variant={row.status === "active" ? "success" : "neutral"}>
                {row.status}
              </Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};
