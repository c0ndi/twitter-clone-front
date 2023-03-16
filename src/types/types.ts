export type IPost ={
   title: string;
   content: string;
   _id?: string;
   createdAt?: string;
   photo?: string;
   comments?: [];
   likes?: number;
}

export type TInputsLogin = {
   email: string;
   password: string;
}

export type TInputsRegister = {
   name: string;
   email: string;
   password: string;
   confirm_password: string;
}