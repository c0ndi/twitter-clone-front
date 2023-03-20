export type IPost = {
   authorName: string;
   authorId: string;
   content: string;
   _id: string;
   createdAt?: string;
   photo?: string;
   comments?: [];
   likes?: string [];
   newLikeMutation?: any;
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

export type TUser = {
   user: {
      _id: string;
      name: string;
      email: string;
      created_at: string;
      likedPosts: [];
   }
}
