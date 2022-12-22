interface RequestSignUp {
  phone_number: string;
  first_name: string;
  last_name: string;
  password: string;
}

interface ResponseSignUp {
  status: number;
  token: string;
}

interface User {}
