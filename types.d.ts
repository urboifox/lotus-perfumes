type TokenData = {
  id: string;
  role: "user" | "admin" | "superadmin";
} | null;

type UserType = {
  _id?: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  role: "user" | "admin" | "superadmin";
  favourites: PerfumeType[];
};

type PerfumeType = {
  _id?: string;
  for: "male" | "female" | "both";
  components: ComponentType[];
};

type ComponentType = {
  name: string;
  type: "east" | "west";
  description: string;
};

type OrderType = {
  perfume: PerfumeType;
  user: UserType;
  date: Date;
  quantity: number;
  status: "pending" | "delivered" | "canceled";
};

type LoginInputs = {
  email: string;
  password: string;
};

type RegisterInputs = {
  email: string;
  password: string;
  name: string;
  address: string;
  phone: string;
};
